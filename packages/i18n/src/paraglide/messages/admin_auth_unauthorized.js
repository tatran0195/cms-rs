import { getLocale } from '../runtime.js';

const translations = {"ar":"غير مصرح","bn":"Not authorized","de":"Not authorized","en":"Not authorized","es":"Not authorized","fr":"Not authorized","hi":"Not authorized","id":"Not authorized","pt-BR":"Not authorized","ru":"Not authorized","ur":"Not authorized","zh-CN":"Not authorized"};

export function admin_auth_unauthorized(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
