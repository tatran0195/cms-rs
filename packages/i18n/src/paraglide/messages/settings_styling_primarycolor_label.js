import { getLocale } from '../runtime.js';

const translations = {"ar":"اللون الأساسي","bn":"প্রাথমিক রঙ","de":"Primärfarbe","en":"Primary color","es":"color primario","fr":"Couleur primaire","hi":"प्राथमिक रंग","id":"Warna primer","pt-BR":"Cor primária","ru":"Основной цвет","ur":"بنیادی رنگ","zh-CN":"原色"};

export function settings_styling_primarycolor_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
