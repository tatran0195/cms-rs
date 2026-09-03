import { getLocale } from '../runtime.js';

const translations = {"ar":"مقال","bn":"প্রবন্ধ","de":"Artikel","en":"Article","es":"Artículo","fr":"Articles","hi":"आलेख","id":"Artikel","pt-BR":"Artigo","ru":"Статья","ur":"مضمون","zh-CN":"文章"};

export function settings_typography_preset_article(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
