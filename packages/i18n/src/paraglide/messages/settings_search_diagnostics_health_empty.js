import { getLocale } from '../runtime.js';

const translations = {"ar":"فارغ","bn":"Empty","de":"Empty","en":"Empty","es":"Empty","fr":"Empty","hi":"Empty","id":"Empty","pt-BR":"Empty","ru":"Empty","ur":"Empty","zh-CN":"Empty"};

export function settings_search_diagnostics_health_empty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
