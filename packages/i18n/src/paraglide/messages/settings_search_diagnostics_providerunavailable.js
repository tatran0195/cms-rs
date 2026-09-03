import { getLocale } from '../runtime.js';

const translations = {"ar":"مزوّد الفهرس غير متاح مؤقتًا. تظل الأعداد غير معروفة.","bn":"The index provider is temporarily unavailable. Counts remain unknown.","de":"The index provider is temporarily unavailable. Counts remain unknown.","en":"The index provider is temporarily unavailable. Counts remain unknown.","es":"The index provider is temporarily unavailable. Counts remain unknown.","fr":"The index provider is temporarily unavailable. Counts remain unknown.","hi":"The index provider is temporarily unavailable. Counts remain unknown.","id":"The index provider is temporarily unavailable. Counts remain unknown.","pt-BR":"The index provider is temporarily unavailable. Counts remain unknown.","ru":"The index provider is temporarily unavailable. Counts remain unknown.","ur":"The index provider is temporarily unavailable. Counts remain unknown.","zh-CN":"The index provider is temporarily unavailable. Counts remain unknown."};

export function settings_search_diagnostics_providerunavailable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
