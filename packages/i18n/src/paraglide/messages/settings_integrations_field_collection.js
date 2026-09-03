import { getLocale } from '../runtime.js';

const translations = {"ar":"المجموعة","bn":"সংগ্রহ","de":"Sammlung","en":"Collection","es":"Colección","fr":"Collection vectorielle","hi":"संग्रह","id":"Koleksi","pt-BR":"Colecção","ru":"Коллекция","ur":"مجموعہ","zh-CN":"收藏"};

export function settings_integrations_field_collection(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
