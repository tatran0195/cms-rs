/**
 * In SPA client mode, custom-domain origin is undefined so paths use /sites/:projectId.
 */
export const customDomainOrigin = (): string | undefined => {
  return undefined;
};
