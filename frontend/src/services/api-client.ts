/**
 * API Client for Rust Backend
 * 
 * This replaces the original Hono RPC client with a client that works
 * with our Rust + Axum backend.
 */

import axios, { type AxiosInstance, type AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { getLocale } from '@cms/i18n';

// API base URL - configured via Vite environment
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// Create axios instance with defaults
export const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Send cookies (for session auth)
});

// Request interceptor to add locale header
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const locale = getLocale();
    if (config.headers) {
      config.headers['X-Locale'] = locale;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle specific error cases
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        // Unauthorized - clear token and redirect to login
        localStorage.removeItem('cms_token');
        localStorage.removeItem('cms_user');
        if (typeof window !== 'undefined') {
          window.location.href = '/sign-in';
        }
      }

      if (status === 429) {
        // Rate limited
        const retryAfter = error.response.headers['retry-after'];
        console.warn(`Rate limited. Retry after: ${retryAfter}s`);
      }
    }

    return Promise.reject(error);
  }
);

// Helper to extract error message
export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;

    // Try to get error message from response
    if (axiosError.response?.data) {
      const data = axiosError.response.data;
      if (typeof data === 'string') {
        return data;
      }
      if (typeof data === 'object' && data !== null && 'error' in data) {
        return (data as { error?: string }).error || 'An error occurred';
      }
      if (typeof data === 'object' && data !== null && 'message' in data) {
        return (data as { message?: string }).message || 'An error occurred';
      }
    }

    // Fall back to status text or generic message
    return axiosError.response?.statusText || axiosError.message || 'An error occurred';
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unknown error occurred';
}

// Typed API client for Rust backend
// This mirrors the structure of the original Hono API
export const rustApi = {
  // Auth endpoints
  auth: {
    login: (data: { email: string; password: string }) =>
      api.post('/auth/login', data),
    register: (data: { email: string; password: string; name: string }) =>
      api.post('/auth/register', data),
    logout: () => api.post('/auth/logout'),
    me: () => api.get('/auth/me'),
    refresh: () => api.post('/auth/refresh'),
    forgotPassword: (email: string) =>
      api.post('/auth/forgot-password', { email }),
    resetPassword: (token: string, password: string) =>
      api.post('/auth/reset-password', { token, password }),
  },

  // Organizations
  orgs: {
    list: () => api.get('/orgs'),
    get: (id: string) => api.get(`/orgs/${id}`),
    create: (data: any) => api.post('/orgs', data),
    update: (id: string, data: any) => api.put(`/orgs/${id}`, data),
    delete: (id: string) => api.delete(`/orgs/${id}`),
    members: {
      list: (orgId: string) => api.get(`/orgs/${orgId}/members`),
      add: (orgId: string, data: any) => api.post(`/orgs/${orgId}/members`, data),
      remove: (orgId: string, userId: string) => api.delete(`/orgs/${orgId}/members/${userId}`),
    },
  },

  // Projects
  projects: {
    list: (orgId: string) => api.get(`/orgs/${orgId}/projects`),
    get: (orgId: string, projectId: string) => api.get(`/orgs/${orgId}/projects/${projectId}`),
    create: (orgId: string, data: any) => api.post(`/orgs/${orgId}/projects`, data),
    update: (orgId: string, projectId: string, data: any) => api.put(`/orgs/${orgId}/projects/${projectId}`, data),
    delete: (orgId: string, projectId: string) => api.delete(`/orgs/${orgId}/projects/${projectId}`),
  },

  // Pages
  pages: {
    list: (orgId: string, projectId: string) => api.get(`/orgs/${orgId}/projects/${projectId}/pages`),
    get: (orgId: string, projectId: string, pageId: string) => api.get(`/orgs/${orgId}/projects/${projectId}/pages/${pageId}`),
    create: (orgId: string, projectId: string, data: any) => api.post(`/orgs/${orgId}/projects/${projectId}/pages`, data),
    update: (orgId: string, projectId: string, pageId: string, data: any) => api.put(`/orgs/${orgId}/projects/${projectId}/pages/${pageId}`, data),
    delete: (orgId: string, projectId: string, pageId: string) => api.delete(`/orgs/${orgId}/projects/${projectId}/pages/${pageId}`),
  },

  // Branches
  branches: {
    list: (orgId: string, projectId: string) => api.get(`/orgs/${orgId}/projects/${projectId}/branches`),
    get: (orgId: string, projectId: string, branchId: string) => api.get(`/orgs/${orgId}/projects/${projectId}/branches/${branchId}`),
    create: (orgId: string, projectId: string, data: any) => api.post(`/orgs/${orgId}/projects/${projectId}/branches`, data),
    update: (orgId: string, projectId: string, branchId: string, data: any) => api.put(`/orgs/${orgId}/projects/${projectId}/branches/${branchId}`, data),
    delete: (orgId: string, projectId: string, branchId: string) => api.delete(`/orgs/${orgId}/projects/${projectId}/branches/${branchId}`),
  },

  // Languages
  languages: {
    list: (orgId: string, projectId: string) => api.get(`/orgs/${orgId}/projects/${projectId}/languages`),
    get: (orgId: string, projectId: string, languageId: string) => api.get(`/orgs/${orgId}/projects/${projectId}/languages/${languageId}`),
    create: (orgId: string, projectId: string, data: any) => api.post(`/orgs/${orgId}/projects/${projectId}/languages`, data),
    update: (orgId: string, projectId: string, languageId: string, data: any) => api.put(`/orgs/${orgId}/projects/${projectId}/languages/${languageId}`, data),
    delete: (orgId: string, projectId: string, languageId: string) => api.delete(`/orgs/${orgId}/projects/${projectId}/languages/${languageId}`),
  },

  // Git
  git: {
    list: (orgId: string, projectId: string) => api.get(`/orgs/${orgId}/projects/${projectId}/git`),
    connect: (orgId: string, projectId: string, data: any) => api.post(`/orgs/${orgId}/projects/${projectId}/git/connect`, data),
    sync: (orgId: string, projectId: string) => api.post(`/orgs/${orgId}/projects/${projectId}/git/sync`),
  },

  // Integrations
  integrations: {
    list: (orgId: string, projectId: string) => api.get(`/orgs/${orgId}/projects/${projectId}/integrations`),
    create: (orgId: string, projectId: string, data: any) => api.post(`/orgs/${orgId}/projects/${projectId}/integrations`, data),
    update: (orgId: string, projectId: string, integrationId: string, data: any) => api.put(`/orgs/${orgId}/projects/${projectId}/integrations/${integrationId}`, data),
    delete: (orgId: string, projectId: string, integrationId: string) => api.delete(`/orgs/${orgId}/projects/${projectId}/integrations/${integrationId}`),
  },

  // Deployments
  deployments: {
    list: (orgId: string, projectId: string) => api.get(`/orgs/${orgId}/projects/${projectId}/deployments`),
    get: (orgId: string, projectId: string, deploymentId: string) => api.get(`/orgs/${orgId}/projects/${projectId}/deployments/${deploymentId}`),
    create: (orgId: string, projectId: string, data: any) => api.post(`/orgs/${orgId}/projects/${projectId}/deployments`, data),
  },

  // Domains
  domains: {
    list: (orgId: string) => api.get(`/orgs/${orgId}/domains`),
    get: (orgId: string, domainId: string) => api.get(`/orgs/${orgId}/domains/${domainId}`),
    create: (orgId: string, data: any) => api.post(`/orgs/${orgId}/domains`, data),
    verify: (orgId: string, domainId: string) => api.post(`/orgs/${orgId}/domains/${domainId}/verify`),
  },

  // Assets
  assets: {
    list: (orgId: string, projectId: string) => api.get(`/orgs/${orgId}/projects/${projectId}/assets`),
    upload: (orgId: string, projectId: string, file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      return api.post(`/orgs/${orgId}/projects/${projectId}/assets`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    },
    delete: (orgId: string, projectId: string, assetId: string) => api.delete(`/orgs/${orgId}/projects/${projectId}/assets/${assetId}`),
  },

  // Comments
  comments: {
    list: (orgId: string, projectId: string, pageId: string) => api.get(`/orgs/${orgId}/projects/${projectId}/pages/${pageId}/comments`),
    create: (orgId: string, projectId: string, pageId: string, data: any) => api.post(`/orgs/${orgId}/projects/${projectId}/pages/${pageId}/comments`, data),
    update: (orgId: string, projectId: string, pageId: string, commentId: string, data: any) => api.put(`/orgs/${orgId}/projects/${projectId}/pages/${pageId}/comments/${commentId}`, data),
    delete: (orgId: string, projectId: string, pageId: string, commentId: string) => api.delete(`/orgs/${orgId}/projects/${projectId}/pages/${pageId}/comments/${commentId}`),
  },

  // Search
  search: {
    search: (orgId: string, projectId: string, query: string) => api.get(`/orgs/${orgId}/projects/${projectId}/search?q=${encodeURIComponent(query)}`),
  },

  // Public endpoints (for published sites)
  public: {
    projects: {
      get: (slug: string) => api.get(`/public/projects/${slug}`),
    },
    sites: {
      get: (projectId: string) => api.get(`/public/projects/${projectId}`),
      page: {
        get: (projectId: string, path: string) => api.get(`/public/projects/${projectId}/pages/${path}`),
      },
      changelog: {
        get: (projectId: string) => api.get(`/public/projects/${projectId}/changelog`),
      },
    },
    git: {
      previews: {
        get: (token: string) => api.get(`/public/git/previews/${token}`),
      },
    },
  },

  // Admin endpoints
  admin: {
    stats: () => api.get('/admin/stats'),
    orgs: {
      list: () => api.get('/admin/orgs'),
      get: (id: string) => api.get(`/admin/orgs/${id}`),
    },
  },

  // Health check
  health: () => api.get('/health'),
};

export default rustApi;
