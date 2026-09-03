import { getLocale } from '../runtime.js';

const translations = {"ar":"العملاء","bn":"Customers","de":"Customers","en":"Customers","es":"Customers","fr":"Customers","hi":"Customers","id":"Customers","pt-BR":"Customers","ru":"Customers","ur":"Customers","zh-CN":"Customers"};

export function admin_nav_customers(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
