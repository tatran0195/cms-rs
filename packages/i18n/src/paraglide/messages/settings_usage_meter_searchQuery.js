import { getLocale } from '../runtime.js';

const translations = {"ar":"استعلامات البحث","bn":"Search queries","de":"Search queries","en":"Search queries","es":"Search queries","fr":"Search queries","hi":"Search queries","id":"Search queries","pt-BR":"Search queries","ru":"Search queries","ur":"Search queries","zh-CN":"Search queries"};

export function settings_usage_meter_searchQuery(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
