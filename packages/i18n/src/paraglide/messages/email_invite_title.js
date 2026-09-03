import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت دعوتك إلى {organizationName}","bn":"You're invited to {organizationName}","de":"You're invited to {organizationName}","en":"You're invited to {organizationName}","es":"You're invited to {organizationName}","fr":"You're invited to {organizationName}","hi":"You're invited to {organizationName}","id":"You're invited to {organizationName}","pt-BR":"You're invited to {organizationName}","ru":"You're invited to {organizationName}","ur":"You're invited to {organizationName}","zh-CN":"You're invited to {organizationName}"};

export function email_invite_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
