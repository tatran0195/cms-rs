import { getLocale } from '../runtime.js';

const translations = {"ar":"غير متاحة","bn":"উপলভ্য নয়","de":"Nicht verfügbar","en":"Unavailable","es":"No disponible","fr":"Indisponible","hi":"अनुपलब्ध","id":"Tidak tersedia","pt-BR":"Indisponível","ru":"Недоступно","ur":"دستیاب نہیں","zh-CN":"不可用"};

export function settings_addons_status_unavailable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
