import { getLocale } from '../runtime.js';

const translations = {"ar":"التحليلات غير متاحة مؤقتًا","bn":"Analytics are temporarily unavailable","de":"Analytics are temporarily unavailable","en":"Analytics are temporarily unavailable","es":"Analytics are temporarily unavailable","fr":"Analytics are temporarily unavailable","hi":"Analytics are temporarily unavailable","id":"Analytics are temporarily unavailable","pt-BR":"Analytics are temporarily unavailable","ru":"Analytics are temporarily unavailable","ur":"Analytics are temporarily unavailable","zh-CN":"Analytics are temporarily unavailable"};

export function analytics_state_unavailable_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
