import { getLocale } from '../runtime.js';

const translations = {"ar":"الرمز غير صالح أو منتهي الصلاحية.","bn":"That code is invalid or expired.","de":"That code is invalid or expired.","en":"That code is invalid or expired.","es":"That code is invalid or expired.","fr":"That code is invalid or expired.","hi":"That code is invalid or expired.","id":"That code is invalid or expired.","pt-BR":"That code is invalid or expired.","ru":"That code is invalid or expired.","ur":"That code is invalid or expired.","zh-CN":"That code is invalid or expired."};

export function admin_signin_codeerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
