import { getLocale } from '../runtime.js';

const translations = {"ar":"عميل","bn":"Customer","de":"Customer","en":"Customer","es":"Customer","fr":"Customer","hi":"Customer","id":"Customer","pt-BR":"Customer","ru":"Customer","ur":"Customer","zh-CN":"Customer"};

export function admin_users_customer(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
