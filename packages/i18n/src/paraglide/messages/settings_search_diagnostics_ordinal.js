import { getLocale } from '../runtime.js';

const translations = {"ar":"المقطع {ordinal}","bn":"Chunk {ordinal}","de":"Chunk {ordinal}","en":"Chunk {ordinal}","es":"Chunk {ordinal}","fr":"Chunk {ordinal}","hi":"Chunk {ordinal}","id":"Chunk {ordinal}","pt-BR":"Chunk {ordinal}","ru":"Chunk {ordinal}","ur":"Chunk {ordinal}","zh-CN":"Chunk {ordinal}"};

export function settings_search_diagnostics_ordinal(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
