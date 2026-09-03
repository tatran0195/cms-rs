import { getLocale } from '../runtime.js';

const translations = {"ar":"وصول آمن دون كلمة مرور لمشرفي المنصة.","bn":"Secure, passwordless access for platform administrators.","de":"Secure, passwordless access for platform administrators.","en":"Secure, passwordless access for platform administrators.","es":"Secure, passwordless access for platform administrators.","fr":"Secure, passwordless access for platform administrators.","hi":"Secure, passwordless access for platform administrators.","id":"Secure, passwordless access for platform administrators.","pt-BR":"Secure, passwordless access for platform administrators.","ru":"Secure, passwordless access for platform administrators.","ur":"Secure, passwordless access for platform administrators.","zh-CN":"Secure, passwordless access for platform administrators."};

export function admin_signin_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
