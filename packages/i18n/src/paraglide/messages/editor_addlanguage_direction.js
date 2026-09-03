import { getLocale } from '../runtime.js';

const translations = {"ar":"الاتجاه","bn":"দিকনির্দেশনা","de":"Richtung","en":"Direction","es":"Dirección","fr":"Direction","hi":"दिशा","id":"Arah","pt-BR":"Direção","ru":"Направление","ur":"سمت","zh-CN":"方向"};

export function editor_addlanguage_direction(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
