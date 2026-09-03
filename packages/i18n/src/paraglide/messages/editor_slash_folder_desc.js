import { getLocale } from '../runtime.js';

const translations = {"ar":"عنصر مجلد ضمن شجرة الملفات.","bn":"A folder entry for a file tree.","de":"A folder entry for a file tree.","en":"A folder entry for a file tree.","es":"A folder entry for a file tree.","fr":"A folder entry for a file tree.","hi":"A folder entry for a file tree.","id":"A folder entry for a file tree.","pt-BR":"A folder entry for a file tree.","ru":"A folder entry for a file tree.","ur":"A folder entry for a file tree.","zh-CN":"A folder entry for a file tree."};

export function editor_slash_folder_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
