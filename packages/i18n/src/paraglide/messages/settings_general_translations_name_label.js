import { getLocale } from '../runtime.js';

const translations = {"ar":"اسم الموقع","bn":"সাইটের নাম","de":"Site-Name","en":"Site name","es":"Nombre del sitio","fr":"Nom du site","hi":"साइट का नाम","id":"Nama situs","pt-BR":"Nome do site","ru":"Название сайта","ur":"سائٹ کا نام","zh-CN":"站点名称"};

export function settings_general_translations_name_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
