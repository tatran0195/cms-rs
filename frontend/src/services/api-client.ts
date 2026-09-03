/**
 * api-client.ts — ky-based REST client for the CMS Rust backend.
 *
 * This is the low-level named client used by direct callers.
 * hooks/api/queries.ts and mutations.ts use the RPC-proxy `api` from api.ts instead.
 */

import { getLocale, REQUEST_LOCALE_HEADER } from '@cms/i18n';
import ky, { type KyInstance, HTTPError } from 'ky';

// SPA: always same-origin; dev-server proxy forwards /api → Rust backend.
const BASE_URL = '/api';

export { HTTPError };

/** Shared ky instance — credentials + locale header on every request. */
export const kyClient: KyInstance = ky.create({
  prefixUrl: BASE_URL,
  credentials: 'include',
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set(REQUEST_LOCALE_HEADER, getLocale());
      },
    ],
    afterResponse: [
      async (request, _options, response) => {
        if (response.status === 401 && typeof window !== 'undefined') {
          const pathname = window.location.pathname;
          const isAuthPage =
            pathname.startsWith('/sign-in') ||
            pathname.startsWith('/sign-up') ||
            pathname.startsWith('/forgot-password') ||
            pathname.startsWith('/reset-password') ||
            pathname.startsWith('/verify-email');
          const isAuthCheck = request.url.includes('auth/me');
          if (!isAuthPage && !isAuthCheck) {
            // Session expired — redirect to login
            window.location.href = '/sign-in';
          }
        }
        return response;
      },
    ],
  },
});

/** Extract a user-friendly error message from a ky HTTPError. */
export async function getErrorMessage(error: unknown): Promise<string> {
  if (error instanceof HTTPError) {
    try {
      const body = (await error.response.clone().json()) as { error?: { message?: string }; message?: string };
      return body?.error?.message ?? body?.message ?? error.message;
    } catch {
      return error.message;
    }
  }
  if (error instanceof Error) return error.message;
  return 'An unknown error occurred';
}

// ─── Typed REST client (mirrors Rust API routes) ─────────────────────────────

export const rustApi = {
  auth: {
    me: () => kyClient.get('auth/me').json(),
    logout: () => kyClient.post('auth/logout').json(),
  },

  orgs: {
    list: () => kyClient.get('orgs').json(),
    get: (id: string) => kyClient.get(`orgs/${id}`).json(),
    create: (data: unknown) => kyClient.post('orgs', { json: data }).json(),
    update: (id: string, data: unknown) => kyClient.put(`orgs/${id}`, { json: data }).json(),
    delete: (id: string) => kyClient.delete(`orgs/${id}`).json(),
    members: {
      list: (orgId: string) => kyClient.get(`orgs/${orgId}/members`).json(),
      invite: (orgId: string, data: unknown) => kyClient.post(`orgs/${orgId}/members`, { json: data }).json(),
      remove: (orgId: string, userId: string) => kyClient.delete(`orgs/${orgId}/members/${userId}`).json(),
    },
  },

  projects: {
    list: () => kyClient.get('app/projects').json(),
    get: (id: string) => kyClient.get(`app/projects/${id}`).json(),
    create: (data: unknown) => kyClient.post('app/projects', { json: data }).json(),
    update: (id: string, data: unknown) => kyClient.put(`app/projects/${id}`, { json: data }).json(),
    delete: (id: string) => kyClient.delete(`app/projects/${id}`).json(),
  },

  pages: {
    list: (projectId: string, branchId?: string) =>
      kyClient.get(`app/projects/${projectId}/pages`, { searchParams: branchId ? { branchId } : {} }).json(),
    get: (projectId: string, pageId: string) => kyClient.get(`app/projects/${projectId}/pages/${pageId}`).json(),
    create: (projectId: string, data: unknown) => kyClient.post(`app/projects/${projectId}/pages`, { json: data }).json(),
    update: (projectId: string, pageId: string, data: unknown) =>
      kyClient.put(`app/projects/${projectId}/pages/${pageId}`, { json: data }).json(),
    delete: (projectId: string, pageId: string) => kyClient.delete(`app/projects/${projectId}/pages/${pageId}`).json(),
  },

  branches: {
    list: (projectId: string) => kyClient.get(`app/projects/${projectId}/branches`).json(),
    create: (projectId: string, data: unknown) => kyClient.post(`app/projects/${projectId}/branches`, { json: data }).json(),
    delete: (projectId: string, branchId: string) => kyClient.delete(`app/projects/${projectId}/branches/${branchId}`).json(),
  },

  languages: {
    list: (projectId: string) => kyClient.get(`app/projects/${projectId}/languages`).json(),
    create: (projectId: string, data: unknown) => kyClient.post(`app/projects/${projectId}/languages`, { json: data }).json(),
    update: (projectId: string, langId: string, data: unknown) =>
      kyClient.put(`app/projects/${projectId}/languages/${langId}`, { json: data }).json(),
    delete: (projectId: string, langId: string) => kyClient.delete(`app/projects/${projectId}/languages/${langId}`).json(),
  },

  deployments: {
    list: (projectId: string) => kyClient.get(`app/projects/${projectId}/deployments`).json(),
    create: (projectId: string, data: unknown) => kyClient.post(`app/projects/${projectId}/deployments`, { json: data }).json(),
  },

  domains: {
    list: (projectId: string) => kyClient.get(`app/projects/${projectId}/domains`).json(),
    add: (projectId: string, data: unknown) => kyClient.post(`app/projects/${projectId}/domains`, { json: data }).json(),
    delete: (projectId: string, domainId: string) => kyClient.delete(`app/projects/${projectId}/domains/${domainId}`).json(),
    verify: (projectId: string, domainId: string) =>
      kyClient.post(`app/projects/${projectId}/domains/${domainId}/verify`).json(),
  },

  assets: {
    list: (projectId: string) => kyClient.get(`app/projects/${projectId}/assets`).json(),
    upload: (projectId: string, file: File) => {
      const form = new FormData();
      form.append('file', file);
      return kyClient.post(`app/projects/${projectId}/assets`, { body: form }).json();
    },
    delete: (projectId: string, assetId: string) => kyClient.delete(`app/projects/${projectId}/assets/${assetId}`).json(),
  },

  public: {
    project: (orgSlug: string, projectSlug: string) =>
      kyClient.get(`public/projects/${orgSlug}/${projectSlug}`).json(),
    pages: (orgSlug: string, projectSlug: string) =>
      kyClient.get(`public/pages/${orgSlug}/${projectSlug}`).json(),
    page: (orgSlug: string, projectSlug: string, pagePath: string) =>
      kyClient.get(`public/pages/${orgSlug}/${projectSlug}/${pagePath}`).json(),
    search: (orgSlug: string, projectSlug: string, q: string) =>
      kyClient.get(`public/search/${orgSlug}/${projectSlug}`, { searchParams: { q } }).json(),
  },

  health: () => kyClient.get('health').json(),
};

export default rustApi;
