import { getLocale } from '../runtime.js';

const translations = {"ar":"انضم إلى {organizationName} على نيبليف.","bn":"Join {organizationName} on Nibleaf.","de":"Join {organizationName} on Nibleaf.","en":"Join {organizationName} on Nibleaf.","es":"Join {organizationName} on Nibleaf.","fr":"Join {organizationName} on Nibleaf.","hi":"Join {organizationName} on Nibleaf.","id":"Join {organizationName} on Nibleaf.","pt-BR":"Join {organizationName} on Nibleaf.","ru":"Join {organizationName} on Nibleaf.","ur":"Join {organizationName} on Nibleaf.","zh-CN":"Join {organizationName} on Nibleaf."};

export function email_invite_preview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
