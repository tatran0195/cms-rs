import { getLocale } from '../runtime.js';

const translations = {"ar":"الصفحة غير موجودة","bn":"Page not found","de":"Page not found","en":"Page not found","es":"Page not found","fr":"Page not found","hi":"Page not found","id":"Page not found","pt-BR":"Page not found","ru":"Page not found","ur":"Page not found","zh-CN":"Page not found"};

export function admin_error_notfound(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
