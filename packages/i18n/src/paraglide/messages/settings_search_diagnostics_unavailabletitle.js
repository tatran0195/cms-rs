import { getLocale } from '../runtime.js';

const translations = {"ar":"حالة الفهرس غير متاحة","bn":"Index state unavailable","de":"Index state unavailable","en":"Index state unavailable","es":"Index state unavailable","fr":"Index state unavailable","hi":"Index state unavailable","id":"Index state unavailable","pt-BR":"Index state unavailable","ru":"Index state unavailable","ur":"Index state unavailable","zh-CN":"Index state unavailable"};

export function settings_search_diagnostics_unavailabletitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
