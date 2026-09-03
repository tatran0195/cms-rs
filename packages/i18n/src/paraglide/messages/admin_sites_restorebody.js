import { getLocale } from '../runtime.js';

const translations = {"ar":"سيعود الموقع متاحًا وقابلًا للنشر.","bn":"The site is served and publishable again.","de":"The site is served and publishable again.","en":"The site is served and publishable again.","es":"The site is served and publishable again.","fr":"The site is served and publishable again.","hi":"The site is served and publishable again.","id":"The site is served and publishable again.","pt-BR":"The site is served and publishable again.","ru":"The site is served and publishable again.","ur":"The site is served and publishable again.","zh-CN":"The site is served and publishable again."};

export function admin_sites_restorebody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
