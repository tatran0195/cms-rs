import { getLocale } from '../runtime.js';

const translations = {"ar":"مجموعة جديدة","bn":"নতুন গ্রুপ","de":"Neue Gruppe","en":"New group","es":"Nuevo grupo","fr":"Nouveau groupe","hi":"नया समूह","id":"Grup baru","pt-BR":"Novo grupo","ru":"Новая группа","ur":"نیا گروپ","zh-CN":"新组"};

export function editor_newgroup(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
