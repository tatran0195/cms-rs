import { getLocale } from '../runtime.js';

const translations = {"ar":"هيكل مؤلف من الملفات والمجلدات.","bn":"An authored hierarchy of files and folders.","de":"An authored hierarchy of files and folders.","en":"An authored hierarchy of files and folders.","es":"An authored hierarchy of files and folders.","fr":"An authored hierarchy of files and folders.","hi":"An authored hierarchy of files and folders.","id":"An authored hierarchy of files and folders.","pt-BR":"An authored hierarchy of files and folders.","ru":"An authored hierarchy of files and folders.","ur":"An authored hierarchy of files and folders.","zh-CN":"An authored hierarchy of files and folders."};

export function editor_slash_filetree_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
