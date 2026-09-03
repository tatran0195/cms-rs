import { getLocale } from '../runtime.js';

const translations = {"ar":"المقاطع","bn":"Chunks","de":"Chunks","en":"Chunks","es":"Chunks","fr":"Chunks","hi":"Chunks","id":"Chunks","pt-BR":"Chunks","ru":"Chunks","ur":"Chunks","zh-CN":"Chunks"};

export function settings_search_diagnostics_chunks(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
