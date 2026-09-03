import { getLocale } from '../runtime.js';

const translations = {"ar":"التسمية","bn":"লেবেল","de":"Etikett","en":"Label","es":"Etiqueta","fr":"Étiquette","hi":"लेबल","id":"Label","pt-BR":"Etiqueta","ru":"Этикетка","ur":"لیبل","zh-CN":"标签"};

export function editor_langsettings_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
