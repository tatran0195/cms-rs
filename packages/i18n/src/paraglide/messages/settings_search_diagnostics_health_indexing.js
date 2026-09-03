import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ الفهرسة","bn":"Indexing","de":"Indexing","en":"Indexing","es":"Indexing","fr":"Indexing","hi":"Indexing","id":"Indexing","pt-BR":"Indexing","ru":"Indexing","ur":"Indexing","zh-CN":"Indexing"};

export function settings_search_diagnostics_health_indexing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
