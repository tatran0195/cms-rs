import { getLocale } from '../runtime.js';

const translations = {"ar":"التسليم","bn":"Delivery","de":"Delivery","en":"Delivery","es":"Delivery","fr":"Delivery","hi":"Delivery","id":"Delivery","pt-BR":"Delivery","ru":"Delivery","ur":"Delivery","zh-CN":"Delivery"};

export function settings_usage_group_delivery(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
