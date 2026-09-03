import { getLocale } from '../runtime.js';

const translations = {"ar":"اكتملت","bn":"Completed","de":"Completed","en":"Completed","es":"Completed","fr":"Completed","hi":"Completed","id":"Completed","pt-BR":"Completed","ru":"Completed","ur":"Completed","zh-CN":"Completed"};

export function admin_site_completed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
