/**
 * In SPA mode, the browser always uses window.location.origin.
 */
export const customDomainOrigin = (): string | undefined => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return undefined;
};
