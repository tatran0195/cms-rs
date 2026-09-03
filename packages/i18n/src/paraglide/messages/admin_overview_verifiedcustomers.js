import { getLocale } from '../runtime.js';

const translations = {"ar":"العملاء الموثقون","bn":"Verified Customers","de":"Verified Customers","en":"Verified Customers","es":"Verified Customers","fr":"Verified Customers","hi":"Verified Customers","id":"Verified Customers","pt-BR":"Verified Customers","ru":"Verified Customers","ur":"Verified Customers","zh-CN":"Verified Customers"};

export function admin_overview_verifiedcustomers(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
