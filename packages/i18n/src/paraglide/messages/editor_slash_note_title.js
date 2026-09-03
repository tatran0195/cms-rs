import { getLocale } from '../runtime.js';

const translations = {"ar":"ملاحظة","bn":"দ্রষ্টব্য","de":"Hinweis","en":"Note","es":"Nota","fr":"Remarque","hi":"नोट","id":"Catatan","pt-BR":"Nota","ru":"Примечание","ur":"نوٹ","zh-CN":"注意事项"};

export function editor_slash_note_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
