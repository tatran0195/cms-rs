import { getLocale } from '../runtime.js';

const translations = {"ar":"المقاييس غير معروفة حاليًا.","bn":"Metrics are currently unknown.","de":"Metrics are currently unknown.","en":"Metrics are currently unknown.","es":"Metrics are currently unknown.","fr":"Metrics are currently unknown.","hi":"Metrics are currently unknown.","id":"Metrics are currently unknown.","pt-BR":"Metrics are currently unknown.","ru":"Metrics are currently unknown.","ur":"Metrics are currently unknown.","zh-CN":"Metrics are currently unknown."};

export function analytics_state_unknown(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
