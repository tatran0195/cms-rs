import { getLocale } from '../runtime.js';

const translations = {"ar":"أساسي","bn":"প্রাথমিক","de":"Primär","en":"Primary","es":"Primaria","fr":"Primaire","hi":"प्राथमिक","id":"Utama","pt-BR":"Primário","ru":"Первичный","ur":"پرائمری","zh-CN":"小学"};

export function settings_domain_status_primary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
