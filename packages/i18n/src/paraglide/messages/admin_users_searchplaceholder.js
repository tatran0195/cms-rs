import { getLocale } from '../runtime.js';

const translations = {"ar":"ابحث بالاسم أو البريد","bn":"Search name or email","de":"Search name or email","en":"Search name or email","es":"Search name or email","fr":"Search name or email","hi":"Search name or email","id":"Search name or email","pt-BR":"Search name or email","ru":"Search name or email","ur":"Search name or email","zh-CN":"Search name or email"};

export function admin_users_searchplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
