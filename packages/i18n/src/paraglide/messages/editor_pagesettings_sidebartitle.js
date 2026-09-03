import { getLocale } from '../runtime.js';

const translations = {"ar":"عنوان الشريط الجانبي","bn":"সাইডবার শিরোনাম","de":"Titel der Seitenleiste","en":"Sidebar title","es":"Título de la barra lateral","fr":"Titre de la barre latérale","hi":"साइडबार शीर्षक","id":"Judul bilah sisi","pt-BR":"Título da barra lateral","ru":"Название боковой панели","ur":"سائڈبار ٹائٹل","zh-CN":"侧边栏标题"};

export function editor_pagesettings_sidebartitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
