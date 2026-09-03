import { getLocale } from '../runtime.js';

const translations = {"ar":"الاسم","bn":"নাম","de":"Name","en":"Name","es":"Nombre","fr":"Nom","hi":"नाम","id":"Nama","pt-BR":"Nome","ru":"Имя","ur":"نام","zh-CN":"名称"};

export function auth_field_name(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
