import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض تفاصيل {site}","bn":"View {site} details","de":"View {site} details","en":"View {site} details","es":"View {site} details","fr":"View {site} details","hi":"View {site} details","id":"View {site} details","pt-BR":"View {site} details","ru":"View {site} details","ur":"View {site} details","zh-CN":"View {site} details"};

export function admin_sites_viewdetails(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
