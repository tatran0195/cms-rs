import { getLocale } from '../runtime.js';

const translations = {"ar":"وسائل تسجيل الدخول","bn":"Auth Connections","de":"Auth Connections","en":"Auth Connections","es":"Auth Connections","fr":"Auth Connections","hi":"Auth Connections","id":"Auth Connections","pt-BR":"Auth Connections","ru":"Auth Connections","ur":"Auth Connections","zh-CN":"Auth Connections"};

export function admin_user_authconnections(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
