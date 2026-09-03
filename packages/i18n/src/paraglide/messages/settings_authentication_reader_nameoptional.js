import { getLocale } from '../runtime.js';

const translations = {"ar":"الاسم (اختياري)","bn":"নাম (ঐচ্ছিক)","de":"Name (optional)","en":"Name (optional)","es":"Nombre (opcional)","fr":"Nom (facultatif)","hi":"नाम (वैकल्पिक)","id":"Nama (opsional)","pt-BR":"Nome (opcional)","ru":"Имя (необязательно)","ur":"نام (اختیاری)","zh-CN":"姓名（可选）"};

export function settings_authentication_reader_nameoptional(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
