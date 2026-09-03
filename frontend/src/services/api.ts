/**
 * API service — ky-based client for the CMS Rust backend.
 *
 * Exposes an `api` object matching the Hono RPC chain shape used by
 * hooks/api/queries.ts and mutations.ts:
 *   api.app.projects.$get()
 *   api.app.projects[':id'].$get({ param: { id } })
 *   api.app.projects[':id'].pages.$post({ json: body })
 *   etc.
 *
 * Each terminal call ($get, $post, …) returns Promise<Response> so the
 * existing getData / mutateData helpers work unchanged.
 */

import { getLocale, REQUEST_LOCALE_HEADER } from '@cms/i18n';
import ky, { type Options as KyOptions } from 'ky';

// SPA: always same-origin in browser; the dev-server proxy forwards /api to Rust.
const BASE_URL = '/api';

/** Shared ky instance — credentials + locale header on every request. */
export const kyInstance = ky.create({
  prefixUrl: BASE_URL,
  credentials: 'include',
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set(REQUEST_LOCALE_HEADER, getLocale());
      },
    ],
  },
});

// ─── Proxy builder ───────────────────────────────────────────────────────────

type Method = '$get' | '$post' | '$put' | '$patch' | '$delete';

interface CallInput {
  param?: Record<string, string>;
  query?: Record<string, string>;
  json?: unknown;
  form?: FormData;
}

/** Replace :token placeholders in a path with provided param values. */
function interpolate(segments: string[], param?: Record<string, string>): string {
  return segments
    .map((s) => (s.startsWith(':') && param?.[s.slice(1)] ? param[s.slice(1)] : s))
    .join('/');
}

/** Convert the proxy path + input into a ky Response-compatible Promise. */
function callMethod(method: string, segments: string[], input: CallInput = {}): Promise<Response> {
  const path = interpolate(segments, input.param);
  const opts: KyOptions = {
    searchParams: input.query as Record<string, string> | undefined,
  };

  if (input.json !== undefined) {
    opts.json = input.json;
  } else if (input.form) {
    opts.body = input.form;
  }

  // ky returns a `ResponsePromise` that extends Promise<Response>
  return kyInstance[method as 'get' | 'post' | 'put' | 'patch' | 'delete'](path, opts) as unknown as Promise<Response>;
}

/** Recursive Proxy: accumulates path segments, handles bracket-notation params. */
function buildProxy(segments: string[]): Record<string, unknown> {
  const METHODS: Method[] = ['$get', '$post', '$put', '$patch', '$delete'];

  return new Proxy({} as Record<string, unknown>, {
    get(_target, prop: string) {
      // Terminal method calls
      if (METHODS.includes(prop as Method)) {
        const httpMethod = prop.slice(1); // '$get' → 'get'
        return (input?: CallInput) => callMethod(httpMethod, segments, input);
      }
      // Accumulate segment (e.g. 'projects', ':id', 'pages')
      return buildProxy([...segments, prop]);
    },
  });
}

// The Rust server mounts all routes under /api.
// We build a proxy rooted at [] so:
//   api.app.projects.$get()  →  GET /api/app/projects
//   api.public.pages[':id'].$get({ param: { id } })  →  GET /api/public/pages/<id>
const root = buildProxy([]);

/** Typed CMS API client. Mirrors the Hono RPC chain shape — backed by ky. */
export const api: any = root;
