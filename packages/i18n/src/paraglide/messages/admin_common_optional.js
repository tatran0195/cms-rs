import { getLocale } from '../runtime.js';

const translations = {"ar":"اختياري","bn":"Optional","de":"Optional","en":"Optional","es":"Optional","fr":"Optional","hi":"Optional","id":"Optional","pt-BR":"Optional","ru":"Optional","ur":"Optional","zh-CN":"Optional"};

export function admin_common_optional(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
