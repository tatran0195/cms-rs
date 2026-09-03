import { getLocale } from '../runtime.js';

const translations = {"ar":"بلغ الحد","bn":"Limit reached","de":"Limit reached","en":"Limit reached","es":"Limit reached","fr":"Limit reached","hi":"Limit reached","id":"Limit reached","pt-BR":"Limit reached","ru":"Limit reached","ur":"Limit reached","zh-CN":"Limit reached"};

export function settings_usage_state_exceeded(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
