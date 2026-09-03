import { getLocale } from '../runtime.js';

const translations = {"ar":"وسوم المقالة","bn":"প্রবন্ধ ট্যাগ","de":"Artikel-Tags","en":"Article tags","es":"Etiquetas de artículo","fr":"Balises d'articles","hi":"आलेख टैग","id":"Tag artikel","pt-BR":"Tags de artigo","ru":"Теги статей","ur":"آرٹیکل ٹیگز","zh-CN":"文章标签"};

export function editor_pagesettings_tags(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
