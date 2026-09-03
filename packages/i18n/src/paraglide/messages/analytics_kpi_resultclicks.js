import { getLocale } from '../runtime.js';

const translations = {"ar":"نقرات نتائج البحث","bn":"Search result clicks","de":"Search result clicks","en":"Search result clicks","es":"Search result clicks","fr":"Search result clicks","hi":"Search result clicks","id":"Search result clicks","pt-BR":"Search result clicks","ru":"Search result clicks","ur":"Search result clicks","zh-CN":"Search result clicks"};

export function analytics_kpi_resultclicks(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
