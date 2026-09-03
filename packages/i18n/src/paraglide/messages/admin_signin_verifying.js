import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ التحقق…","bn":"Verifying…","de":"Verifying…","en":"Verifying…","es":"Verifying…","fr":"Verifying…","hi":"Verifying…","id":"Verifying…","pt-BR":"Verifying…","ru":"Verifying…","ur":"Verifying…","zh-CN":"Verifying…"};

export function admin_signin_verifying(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
