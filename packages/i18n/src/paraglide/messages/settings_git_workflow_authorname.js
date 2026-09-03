import { getLocale } from '../runtime.js';

const translations = {"ar":"اسم المؤلف","bn":"লেখকের নাম","de":"Name des Autors","en":"Author name","es":"Nombre del autor","fr":"Nom de l'auteur","hi":"लेखक का नाम","id":"Nama penulis","pt-BR":"Nome do autor","ru":"Имя автора","ur":"مصنف کا نام","zh-CN":"作者姓名"};

export function settings_git_workflow_authorname(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
