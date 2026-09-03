import { getLocale } from '../runtime.js';

const translations = {"ar":"المصادقة","bn":"Auth","de":"Auth","en":"Auth","es":"Auth","fr":"Auth","hi":"Auth","id":"Auth","pt-BR":"Auth","ru":"Auth","ur":"Auth","zh-CN":"Auth"};

export function admin_users_auth(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
