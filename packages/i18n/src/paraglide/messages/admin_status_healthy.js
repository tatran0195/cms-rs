import { getLocale } from '../runtime.js';

const translations = {"ar":"سليم","bn":"Healthy","de":"Healthy","en":"Healthy","es":"Healthy","fr":"Healthy","hi":"Healthy","id":"Healthy","pt-BR":"Healthy","ru":"Healthy","ur":"Healthy","zh-CN":"Healthy"};

export function admin_status_healthy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
