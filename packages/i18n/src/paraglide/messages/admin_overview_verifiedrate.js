import { getLocale } from '../runtime.js';

const translations = {"ar":"معدل التوثيق","bn":"Verified rate","de":"Verified rate","en":"Verified rate","es":"Verified rate","fr":"Verified rate","hi":"Verified rate","id":"Verified rate","pt-BR":"Verified rate","ru":"Verified rate","ur":"Verified rate","zh-CN":"Verified rate"};

export function admin_overview_verifiedrate(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
