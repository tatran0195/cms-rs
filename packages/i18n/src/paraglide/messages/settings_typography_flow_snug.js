import { getLocale } from '../runtime.js';

const translations = {"ar":"متقارب","bn":"স্নাগ","de":"Gemütlich","en":"Snug","es":"Cómodo","fr":"Confortable","hi":"आरामदायक","id":"Nyaman","pt-BR":"Aconchegante","ru":"Уютный","ur":"سنگ","zh-CN":"舒适"};

export function settings_typography_flow_snug(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
