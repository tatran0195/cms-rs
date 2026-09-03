import { getLocale } from '../runtime.js';

const translations = {"ar":"مصدر المستند","bn":"নথির উৎস","de":"Dokumentquelle","en":"Document source","es":"Fuente del documento","fr":"Origine du document","hi":"दस्तावेज़ स्रोत","id":"Sumber dokumen","pt-BR":"Fonte do documento","ru":"Источник документа","ur":"دستاویز کا ذریعہ","zh-CN":"文档来源"};

export function settings_openapi_source(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
