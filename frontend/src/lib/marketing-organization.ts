/** Public organization facts shared by every CMS JSON-LD graph.
 * Keep these values limited to facts CMS intentionally publishes. */
export const CMS_ORGANIZATION = {
  name: 'CMS',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'TN',
  },
  supportContact: {
    '@type': 'ContactPoint',
    contactType: 'Product support',
    email: 'support@cms.com',
    availableLanguage: ['English', 'Arabic'],
  },
} as const;
