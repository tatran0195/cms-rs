import { getLocale } from '../runtime.js';

const translations = {"ar":"إيقاف الحساب","bn":"Suspend account","de":"Suspend account","en":"Suspend account","es":"Suspend account","fr":"Suspend account","hi":"Suspend account","id":"Suspend account","pt-BR":"Suspend account","ru":"Suspend account","ur":"Suspend account","zh-CN":"Suspend account"};

export function admin_users_suspendaccount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
