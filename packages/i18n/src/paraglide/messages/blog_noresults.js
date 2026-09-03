import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد مقالات تطابق «{query}». جرّب بحثًا آخر.","bn":"No articles match “{query}”. Try another search.","de":"No articles match “{query}”. Try another search.","en":"No articles match “{query}”. Try another search.","es":"No articles match “{query}”. Try another search.","fr":"No articles match “{query}”. Try another search.","hi":"No articles match “{query}”. Try another search.","id":"No articles match “{query}”. Try another search.","pt-BR":"No articles match “{query}”. Try another search.","ru":"No articles match “{query}”. Try another search.","ur":"No articles match “{query}”. Try another search.","zh-CN":"No articles match “{query}”. Try another search."};

export function blog_noresults(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
