import { getLocale } from '../runtime.js';

const translations = {"ar":"البحث في المقالات","bn":"Search articles","de":"Search articles","en":"Search articles","es":"Search articles","fr":"Search articles","hi":"Search articles","id":"Search articles","pt-BR":"Search articles","ru":"Search articles","ur":"Search articles","zh-CN":"Search articles"};

export function blog_searchlabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
