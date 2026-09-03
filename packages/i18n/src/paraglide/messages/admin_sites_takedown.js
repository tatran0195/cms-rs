import { getLocale } from '../runtime.js';

const translations = {"ar":"إيقاف الموقع","bn":"Takedown","de":"Takedown","en":"Takedown","es":"Takedown","fr":"Takedown","hi":"Takedown","id":"Takedown","pt-BR":"Takedown","ru":"Takedown","ur":"Takedown","zh-CN":"Takedown"};

export function admin_sites_takedown(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
