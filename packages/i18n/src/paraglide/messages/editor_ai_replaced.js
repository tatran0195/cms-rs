import { getLocale } from '../runtime.js';

const translations = {"ar":"تم استبدال المستند.","bn":"নথি প্রতিস্থাপিত.","de":"Dokument ersetzt.","en":"Document replaced.","es":"Documento sustituido.","fr":"Document remplacé.","hi":"दस्तावेज़ बदला गया.","id":"Dokumen diganti.","pt-BR":"Documento substituído.","ru":"Документ заменен.","ur":"دستاویز تبدیل کر دی گئی۔","zh-CN":"文档被替换。"};

export function editor_ai_replaced(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
