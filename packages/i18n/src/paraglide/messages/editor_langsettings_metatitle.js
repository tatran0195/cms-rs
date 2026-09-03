import { getLocale } from '../runtime.js';

const translations = {"ar":"عنوان الموقع","bn":"সাইটের শিরোনাম","de":"Titel der Website","en":"Site title","es":"Título del sitio","fr":"Titre du site","hi":"साइट का शीर्षक","id":"Judul situs","pt-BR":"Título do site","ru":"Название сайта","ur":"سائٹ کا عنوان","zh-CN":"网站标题"};

export function editor_langsettings_metatitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
