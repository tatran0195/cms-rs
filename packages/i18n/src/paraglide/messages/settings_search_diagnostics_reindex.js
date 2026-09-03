import { getLocale } from '../runtime.js';

const translations = {"ar":"إعادة الفهرسة","bn":"Reindex","de":"Reindex","en":"Reindex","es":"Reindex","fr":"Reindex","hi":"Reindex","id":"Reindex","pt-BR":"Reindex","ru":"Reindex","ur":"Reindex","zh-CN":"Reindex"};

export function settings_search_diagnostics_reindex(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
