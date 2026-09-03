import { getLocale } from '../runtime.js';

const translations = {"ar":"مائل","bn":"তির্যক","de":"Kursiv","en":"Italic","es":"cursiva","fr":"Italique","hi":"इटैलिक","id":"miring","pt-BR":"Itálico","ru":"Курсив","ur":"ترچھا","zh-CN":"斜体"};

export function editor_format_italic(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
