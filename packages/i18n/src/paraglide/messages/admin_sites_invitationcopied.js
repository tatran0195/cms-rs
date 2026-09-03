import { getLocale } from '../runtime.js';

const translations = {"ar":"نُسخ رابط الدعوة","bn":"Invitation link copied","de":"Invitation link copied","en":"Invitation link copied","es":"Invitation link copied","fr":"Invitation link copied","hi":"Invitation link copied","id":"Invitation link copied","pt-BR":"Invitation link copied","ru":"Invitation link copied","ur":"Invitation link copied","zh-CN":"Invitation link copied"};

export function admin_sites_invitationcopied(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
