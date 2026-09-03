import { getLocale } from '../runtime.js';

const translations = {"ar":"اكتب Markdown / MDX…","bn":"লিখুন Markdown / MDX…","de":"Schreiben Sie Markdown / MDX…","en":"Write Markdown / MDX…","es":"Escribe Markdown / MDX…","fr":"Écrivez Markdown / MDX…","hi":"Markdown / MDX लिखें…","id":"Tulis Markdown / MDX…","pt-BR":"Escreva Markdown / MDX…","ru":"Напишите Markdown / MDX…","ur":"لکھیں Markdown / MDX…","zh-CN":"写入 Markdown / MDX..."};

export function editor_markdownplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
