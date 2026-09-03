import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ البحث…","bn":"Searching…","de":"Searching…","en":"Searching…","es":"Searching…","fr":"Searching…","hi":"Searching…","id":"Searching…","pt-BR":"Searching…","ru":"Searching…","ur":"Searching…","zh-CN":"Searching…"};

export function site_searching(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
