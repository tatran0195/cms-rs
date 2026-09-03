import { getLocale } from '../runtime.js';

const translations = {"ar":"تمييز","bn":"হাইলাইট করুন","de":"Hervorheben","en":"Highlight","es":"Resaltar","fr":"Mettre en surbrillance","hi":"हाइलाइट करें","id":"Sorot","pt-BR":"Destaque","ru":"Выделить","ur":"نمایاں کریں۔","zh-CN":"亮点"};

export function editor_format_highlight(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
