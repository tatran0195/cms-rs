import { getLocale } from '../runtime.js';

const translations = {"ar":"غير موثق","bn":"Unverified","de":"Unverified","en":"Unverified","es":"Unverified","fr":"Unverified","hi":"Unverified","id":"Unverified","pt-BR":"Unverified","ru":"Unverified","ur":"Unverified","zh-CN":"Unverified"};

export function admin_status_unverified(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
