import { getLocale } from '../runtime.js';

const translations = {"ar":"جزئي","bn":"Partial","de":"Partial","en":"Partial","es":"Partial","fr":"Partial","hi":"Partial","id":"Partial","pt-BR":"Partial","ru":"Partial","ur":"Partial","zh-CN":"Partial"};

export function settings_usage_state_partial(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
