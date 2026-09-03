import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ الإضافة…","bn":"Queuing…","de":"Queuing…","en":"Queuing…","es":"Queuing…","fr":"Queuing…","hi":"Queuing…","id":"Queuing…","pt-BR":"Queuing…","ru":"Queuing…","ur":"Queuing…","zh-CN":"Queuing…"};

export function settings_search_diagnostics_reindexing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
