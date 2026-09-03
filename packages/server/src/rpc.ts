/**
 * @cms/server/rpc — Rust backend RPC shim
 *
 * Replaces the original Hono hcWithType RPC client.
 * Provides a proxy object matching the shape that hooks/api/queries.ts and
 * mutations.ts expect: api.app.projects.$get(), api.public.sites[':slug'].$get(), etc.
 *
 * Each chain returns a Promise<Response>-compatible object so the existing
 * getData / mutateData helpers work unchanged.
 */

interface FetchOptions {
  credentials?: RequestCredentials;
}

interface ClientOptions {
  init?: FetchOptions;
  fetch?: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
}

type ParamInput = { param?: Record<string, string>; query?: Record<string, string>; json?: unknown; form?: FormData };

/** Build a URL, substituting :param tokens and appending query strings. */
function buildUrl(base: string, segments: string[], input: ParamInput = {}): string {
  // Replace path param tokens (:id, :projectId, etc.) with provided values
  let path = segments.join('/').replace(/\/+/g, '/');
  if (input.param) {
    for (const [key, value] of Object.entries(input.param)) {
      path = path.replace(`:${key}`, encodeURIComponent(value));
    }
  }
  const url = `${base}/${path}`.replace(/([^:])\/\/+/g, '$1/');
  if (!input.query) return url;
  const qs = new URLSearchParams(
    Object.fromEntries(Object.entries(input.query).filter(([, v]) => v !== undefined && v !== null))
  ).toString();
  return qs ? `${url}?${qs}` : url;
}

type Method = '$get' | '$post' | '$put' | '$patch' | '$delete';

/** Create a recursive Proxy that accumulates path segments then fires fetch on $get/$post/etc. */
function createProxy(baseUrl: string, segments: string[], opts: ClientOptions): Record<string, unknown> {
  const customFetch = opts.fetch ?? fetch;
  const init = opts.init ?? {};

  return new Proxy({} as Record<string, unknown>, {
    get(_target, prop: string) {
      const methods: Method[] = ['$get', '$post', '$put', '$patch', '$delete'];
      if (methods.includes(prop as Method)) {
        const method = prop.slice(1).toUpperCase(); // '$get' → 'GET'
        return (input?: ParamInput) => {
          const url = buildUrl(baseUrl, segments, input);
          const body = input?.json !== undefined
            ? JSON.stringify(input.json)
            : input?.form;
          return customFetch(url, {
            method,
            credentials: init.credentials ?? 'include',
            headers: input?.json !== undefined ? { 'Content-Type': 'application/json' } : undefined,
            body,
          });
        };
      }
      // Accumulate path segment (handles both named segments and :param notation)
      return createProxy(baseUrl, [...segments, prop], opts);
    },
  });
}

/**
 * Typed Hono-compatible RPC client factory.
 *
 * Returns a proxy rooted at `baseUrl` that mimics the Hono `hc()` chain.
 * Type parameter is ignored (for source compatibility) — call shapes are dynamic.
 */
export function hcWithType<_T = unknown>(baseUrl: string, opts: ClientOptions = {}): Record<string, unknown> {
  return createProxy(baseUrl.replace(/\/$/, ''), [], opts);
}
