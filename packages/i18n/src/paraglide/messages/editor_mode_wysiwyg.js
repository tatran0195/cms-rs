import { getLocale } from '../runtime.js';

const translations = {"ar":"نص منسق","bn":"সমৃদ্ধ পাঠ্য","de":"Rich-Text","en":"Rich text","es":"Texto enriquecido","fr":"Texte enrichi","hi":"समृद्ध पाठ","id":"Teks kaya","pt-BR":"Texto rico","ru":"Форматированный текст","ur":"بھرپور متن","zh-CN":"富文本"};

export function editor_mode_wysiwyg(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
