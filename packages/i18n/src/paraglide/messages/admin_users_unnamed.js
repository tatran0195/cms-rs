import { getLocale } from '../runtime.js';

const translations = {"ar":"عميل بلا اسم","bn":"Unnamed customer","de":"Unnamed customer","en":"Unnamed customer","es":"Unnamed customer","fr":"Unnamed customer","hi":"Unnamed customer","id":"Unnamed customer","pt-BR":"Unnamed customer","ru":"Unnamed customer","ur":"Unnamed customer","zh-CN":"Unnamed customer"};

export function admin_users_unnamed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
