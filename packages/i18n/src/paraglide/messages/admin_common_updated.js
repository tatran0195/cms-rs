import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر تحديث","bn":"Updated","de":"Updated","en":"Updated","es":"Updated","fr":"Updated","hi":"Updated","id":"Updated","pt-BR":"Updated","ru":"Updated","ur":"Updated","zh-CN":"Updated"};

export function admin_common_updated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
