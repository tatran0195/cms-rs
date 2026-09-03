import { getLocale } from '../runtime.js';

const translations = {"ar":"قديم","bn":"Stale","de":"Stale","en":"Stale","es":"Stale","fr":"Stale","hi":"Stale","id":"Stale","pt-BR":"Stale","ru":"Stale","ur":"Stale","zh-CN":"Stale"};

export function settings_search_diagnostics_issuestale(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
