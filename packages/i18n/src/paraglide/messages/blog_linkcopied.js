import { getLocale } from '../runtime.js';

const translations = {"ar":"نُسخ الرابط","bn":"Link copied","de":"Link copied","en":"Link copied","es":"Link copied","fr":"Link copied","hi":"Link copied","id":"Link copied","pt-BR":"Link copied","ru":"Link copied","ur":"Link copied","zh-CN":"Link copied"};

export function blog_linkcopied(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
