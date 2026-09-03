import { getLocale } from '../runtime.js';

const translations = {"ar":"مخفية","bn":"লুকানো","de":"Versteckt","en":"Hidden","es":"Oculto","fr":"Caché","hi":"छिपा हुआ","id":"Tersembunyi","pt-BR":"Oculto","ru":"Скрытый","ur":"پوشیدہ","zh-CN":"隐藏"};

export function editor_pagesettings_hidden(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
