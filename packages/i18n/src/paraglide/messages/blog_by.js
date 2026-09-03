import { getLocale } from '../runtime.js';

const translations = {"ar":"بقلم","bn":"By","de":"By","en":"By","es":"By","fr":"By","hi":"By","id":"By","pt-BR":"By","ru":"By","ur":"By","zh-CN":"By"};

export function blog_by(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
