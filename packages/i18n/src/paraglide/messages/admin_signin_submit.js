import { getLocale } from '../runtime.js';

const translations = {"ar":"تسجيل الدخول","bn":"Log in","de":"Log in","en":"Log in","es":"Log in","fr":"Log in","hi":"Log in","id":"Log in","pt-BR":"Log in","ru":"Log in","ur":"Log in","zh-CN":"Log in"};

export function admin_signin_submit(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
