import { getLocale } from '../runtime.js';

const translations = {"ar":"غير متاح","bn":"Unavailable","de":"Unavailable","en":"Unavailable","es":"Unavailable","fr":"Unavailable","hi":"Unavailable","id":"Unavailable","pt-BR":"Unavailable","ru":"Unavailable","ur":"Unavailable","zh-CN":"Unavailable"};

export function settings_search_diagnostics_health_unavailable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
