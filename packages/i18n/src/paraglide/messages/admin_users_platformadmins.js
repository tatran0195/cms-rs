import { getLocale } from '../runtime.js';

const translations = {"ar":"مشرفو المنصة","bn":"Platform admins","de":"Platform admins","en":"Platform admins","es":"Platform admins","fr":"Platform admins","hi":"Platform admins","id":"Platform admins","pt-BR":"Platform admins","ru":"Platform admins","ur":"Platform admins","zh-CN":"Platform admins"};

export function admin_users_platformadmins(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
