import { getLocale } from '../runtime.js';

const translations = {"ar":"غير متاح","bn":"পাওয়া যাচ্ছে না","de":"Nicht verfügbar","en":"Unavailable","es":"No disponible","fr":"Indisponible","hi":"अनुपलब्ध","id":"Tidak tersedia","pt-BR":"Indisponível","ru":"Недоступный","ur":"دستیاب نہیں","zh-CN":"无法获取"};

export function settings_integrations_availability_unavailable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
