import { getLocale } from '../runtime.js';

const translations = {"ar":"نُشر","bn":"Published","de":"Published","en":"Published","es":"Published","fr":"Published","hi":"Published","id":"Published","pt-BR":"Published","ru":"Published","ur":"Published","zh-CN":"Published"};

export function blog_published(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
