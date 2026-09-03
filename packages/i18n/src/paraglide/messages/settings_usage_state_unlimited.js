import { getLocale } from '../runtime.js';

const translations = {"ar":"بلا حد","bn":"No limit","de":"No limit","en":"No limit","es":"No limit","fr":"No limit","hi":"No limit","id":"No limit","pt-BR":"No limit","ru":"No limit","ur":"No limit","zh-CN":"No limit"};

export function settings_usage_state_unlimited(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
