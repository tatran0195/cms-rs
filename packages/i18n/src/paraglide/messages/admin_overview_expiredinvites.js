import { getLocale } from '../runtime.js';

const translations = {"ar":"الدعوات المنتهية","bn":"Expired invites","de":"Expired invites","en":"Expired invites","es":"Expired invites","fr":"Expired invites","hi":"Expired invites","id":"Expired invites","pt-BR":"Expired invites","ru":"Expired invites","ur":"Expired invites","zh-CN":"Expired invites"};

export function admin_overview_expiredinvites(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
