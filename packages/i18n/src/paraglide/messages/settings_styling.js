import { getLocale } from '../runtime.js';

const translations = {"ar":"التنسيق","bn":"স্টাইলিং","de":"Styling","en":"Styling","es":"Estilo","fr":"Stylisme","hi":"स्टाइलिंग","id":"Penataan gaya","pt-BR":"Estilo","ru":"Стиль","ur":"اسٹائلنگ","zh-CN":"造型"};

export function settings_styling(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
