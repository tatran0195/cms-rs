import { getLocale } from '../runtime.js';

const translations = {"ar":"Ghost","bn":"ভূত","de":"Geist","en":"Ghost","es":"fantasma","fr":"Fantôme","hi":"भूत","id":"Hantu","pt-BR":"Fantasma","ru":"Призрак","ur":"بھوت","zh-CN":"幽灵"};

export function settings_import_ghost_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
