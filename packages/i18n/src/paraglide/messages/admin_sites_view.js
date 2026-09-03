import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض {site}","bn":"View {site}","de":"View {site}","en":"View {site}","es":"View {site}","fr":"View {site}","hi":"View {site}","id":"View {site}","pt-BR":"View {site}","ru":"View {site}","ur":"View {site}","zh-CN":"View {site}"};

export function admin_sites_view(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
