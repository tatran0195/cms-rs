import { getLocale } from '../runtime.js';

const translations = {"ar":"دعاك {inviterName} إلى {organizationName} على نيبليف","bn":"{inviterName} invited you to {organizationName} on Nibleaf","de":"{inviterName} invited you to {organizationName} on Nibleaf","en":"{inviterName} invited you to {organizationName} on Nibleaf","es":"{inviterName} invited you to {organizationName} on Nibleaf","fr":"{inviterName} invited you to {organizationName} on Nibleaf","hi":"{inviterName} invited you to {organizationName} on Nibleaf","id":"{inviterName} invited you to {organizationName} on Nibleaf","pt-BR":"{inviterName} invited you to {organizationName} on Nibleaf","ru":"{inviterName} invited you to {organizationName} on Nibleaf","ur":"{inviterName} invited you to {organizationName} on Nibleaf","zh-CN":"{inviterName} invited you to {organizationName} on Nibleaf"};

export function email_invite_subject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
