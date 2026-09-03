import { getLocale } from '../runtime.js';

const translations = {"ar":"السعة","bn":"Capacity","de":"Capacity","en":"Capacity","es":"Capacity","fr":"Capacity","hi":"Capacity","id":"Capacity","pt-BR":"Capacity","ru":"Capacity","ur":"Capacity","zh-CN":"Capacity"};

export function settings_usage_group_capacity(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
