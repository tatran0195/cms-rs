import { getLocale } from '../runtime.js';

const translations = {"ar":"عناصر قديمة","bn":"Stale items","de":"Stale items","en":"Stale items","es":"Stale items","fr":"Stale items","hi":"Stale items","id":"Stale items","pt-BR":"Stale items","ru":"Stale items","ur":"Stale items","zh-CN":"Stale items"};

export function settings_search_diagnostics_health_stale(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
