import { getLocale } from '../runtime.js';

const translations = {"ar":"نص","bn":"পাঠ্য","de":"Text","en":"Text","es":"Texto","fr":"Texte","hi":"पाठ","id":"Teks","pt-BR":"Texto","ru":"Текст","ur":"متن","zh-CN":"文字"};

export function editor_slash_text_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
