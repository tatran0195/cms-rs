import { getLocale } from '../runtime.js';

const translations = {"ar":"يقترب من الحد","bn":"Approaching limit","de":"Approaching limit","en":"Approaching limit","es":"Approaching limit","fr":"Approaching limit","hi":"Approaching limit","id":"Approaching limit","pt-BR":"Approaching limit","ru":"Approaching limit","ur":"Approaching limit","zh-CN":"Approaching limit"};

export function settings_usage_state_approaching(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
