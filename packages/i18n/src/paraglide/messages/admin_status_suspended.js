import { getLocale } from '../runtime.js';

const translations = {"ar":"موقوف","bn":"Suspended","de":"Suspended","en":"Suspended","es":"Suspended","fr":"Suspended","hi":"Suspended","id":"Suspended","pt-BR":"Suspended","ru":"Suspended","ur":"Suspended","zh-CN":"Suspended"};

export function admin_status_suspended(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
