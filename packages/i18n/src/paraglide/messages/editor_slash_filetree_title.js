import { getLocale } from '../runtime.js';

const translations = {"ar":"شجرة الملفات","bn":"File tree","de":"File tree","en":"File tree","es":"File tree","fr":"File tree","hi":"File tree","id":"File tree","pt-BR":"File tree","ru":"File tree","ur":"File tree","zh-CN":"File tree"};

export function editor_slash_filetree_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
