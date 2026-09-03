import { getLocale } from '../runtime.js';

const translations = {"ar":"الوسوم","bn":"ট্যাগ","de":"Schlagworte","en":"Tags","es":"Etiquetas","fr":"Balises","hi":"टैग","id":"Tag","pt-BR":"Etiquetas","ru":"Теги","ur":"ٹیگز","zh-CN":"标签"};

export function site_tags(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
