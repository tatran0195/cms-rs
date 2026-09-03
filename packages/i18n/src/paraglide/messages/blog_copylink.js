import { getLocale } from '../runtime.js';

const translations = {"ar":"نسخ رابط المقال","bn":"Copy article link","de":"Copy article link","en":"Copy article link","es":"Copy article link","fr":"Copy article link","hi":"Copy article link","id":"Copy article link","pt-BR":"Copy article link","ru":"Copy article link","ur":"Copy article link","zh-CN":"Copy article link"};

export function blog_copylink(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
