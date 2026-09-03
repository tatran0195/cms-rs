import { getLocale } from '../runtime.js';

const translations = {"ar":"الإصدارات","bn":"Versions","de":"Versions","en":"Versions","es":"Versions","fr":"Versions","hi":"Versions","id":"Versions","pt-BR":"Versions","ru":"Versions","ur":"Versions","zh-CN":"Versions"};

export function settings_search_diagnostics_versions(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
