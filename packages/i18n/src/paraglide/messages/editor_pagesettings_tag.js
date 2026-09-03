import { getLocale } from '../runtime.js';

const translations = {"ar":"وسم","bn":"ট্যাগ","de":"Etikett","en":"Tag","es":"Etiqueta","fr":"Étiquette","hi":"टैग","id":"Menandai","pt-BR":"Etiqueta","ru":"Тег","ur":"ٹیگ","zh-CN":"标签"};

export function editor_pagesettings_tag(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
