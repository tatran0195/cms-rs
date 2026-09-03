import { getLocale } from '../runtime.js';

const translations = {"ar":"اقتباس","bn":"উদ্ধৃতি","de":"Zitat","en":"Quote","es":"Cotización","fr":"Citation","hi":"उद्धरण","id":"Kutipan","pt-BR":"Citação","ru":"Цитата","ur":"اقتباس","zh-CN":"报价"};

export function editor_slash_quote_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
