import { getLocale } from '../runtime.js';

const translations = {"ar":"مجلد","bn":"Folder","de":"Folder","en":"Folder","es":"Folder","fr":"Folder","hi":"Folder","id":"Folder","pt-BR":"Folder","ru":"Folder","ur":"Folder","zh-CN":"Folder"};

export function editor_slash_folder_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
