import { getLocale } from '../runtime.js';

const translations = {"ar":"انتهاء الصلاحية","bn":"মেয়াদ","de":"Ablauf","en":"Expiration","es":"Caducidad","fr":"Expiration","hi":"समाप्ति","id":"Kedaluwarsa","pt-BR":"Validade","ru":"Срок действия","ur":"میعاد","zh-CN":"有效期"};

export function settings_apikeys_expiry(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
