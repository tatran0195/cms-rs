import { getLocale } from '../runtime.js';

const translations = {"ar":"عنصر ملف ضمن شجرة الملفات.","bn":"A file entry for a file tree.","de":"A file entry for a file tree.","en":"A file entry for a file tree.","es":"A file entry for a file tree.","fr":"A file entry for a file tree.","hi":"A file entry for a file tree.","id":"A file entry for a file tree.","pt-BR":"A file entry for a file tree.","ru":"A file entry for a file tree.","ur":"A file entry for a file tree.","zh-CN":"A file entry for a file tree."};

export function editor_slash_file_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
