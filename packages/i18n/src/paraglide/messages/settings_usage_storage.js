import { getLocale } from '../runtime.js';

const translations = {"ar":"التخزين","bn":"স্টোরেজ","de":"Lagerung","en":"Storage","es":"Almacenamiento","fr":"Stockage","hi":"भंडारण","id":"Penyimpanan","pt-BR":"Armazenamento","ru":"Хранение","ur":"ذخیرہ","zh-CN":"存储"};

export function settings_usage_storage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
