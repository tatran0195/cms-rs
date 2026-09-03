import { getLocale } from '../runtime.js';

const translations = {"ar":"الفهرس المنطقي","bn":"Logical index","de":"Logical index","en":"Logical index","es":"Logical index","fr":"Logical index","hi":"Logical index","id":"Logical index","pt-BR":"Logical index","ru":"Logical index","ur":"Logical index","zh-CN":"Logical index"};

export function settings_search_diagnostics_indextitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
