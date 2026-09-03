import { getLocale } from '../runtime.js';

const translations = {"ar":"كل المقالات","bn":"All articles","de":"All articles","en":"All articles","es":"All articles","fr":"All articles","hi":"All articles","id":"All articles","pt-BR":"All articles","ru":"All articles","ur":"All articles","zh-CN":"All articles"};

export function blog_allarticles(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
