import { createNibleafAuthClientFn } from '@cms/auth/client';
import { getLocale } from '@cms/i18n';

// Same-origin SPA: auth requests go to /api/auth (proxied to Rust in dev,
// served directly in production).
export const authClient = createNibleafAuthClientFn({
  baseURL: window.location.origin,
  locale: getLocale,
});

export const { signIn, signOut, signUp, useSession, getSession } = authClient;
