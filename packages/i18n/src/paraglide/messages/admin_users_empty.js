import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يوجد عملاء مطابقون","bn":"No customers match","de":"No customers match","en":"No customers match","es":"No customers match","fr":"No customers match","hi":"No customers match","id":"No customers match","pt-BR":"No customers match","ru":"No customers match","ur":"No customers match","zh-CN":"No customers match"};

export function admin_users_empty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
