import { getLocale } from '../runtime.js';

const translations = {"ar":"العنوان","bn":"শিরোনাম","de":"Titel","en":"Title","es":"Título","fr":"Titre","hi":"शीर्षक","id":"Judul","pt-BR":"Título","ru":"Название","ur":"عنوان","zh-CN":"标题"};

export function editor_pagesettings_pagetitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
