import { getLocale } from '../runtime.js';

const translations = {"ar":"التخزين","bn":"স্টোরেজ","de":"Speicher","en":"Storage","es":"Almacenamiento","fr":"Stockage","hi":"भंडारण","id":"Penyimpanan","pt-BR":"Armazenamento","ru":"хранение","ur":"اسٹوریج","zh-CN":"储存"};

export function settings_integrations_category_storage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
