import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء ونسخ الرابط","bn":"Create copy","de":"Create copy","en":"Create copy","es":"Create copy","fr":"Create copy","hi":"Create copy","id":"Create copy","pt-BR":"Create copy","ru":"Create copy","ur":"Create copy","zh-CN":"Create copy"};

export function admin_sites_createcopy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
