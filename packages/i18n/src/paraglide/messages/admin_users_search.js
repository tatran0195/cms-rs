import { getLocale } from '../runtime.js';

const translations = {"ar":"بحث","bn":"Search","de":"Search","en":"Search","es":"Search","fr":"Search","hi":"Search","id":"Search","pt-BR":"Search","ru":"Search","ur":"Search","zh-CN":"Search"};

export function admin_users_search(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
