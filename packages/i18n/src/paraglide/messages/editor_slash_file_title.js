import { getLocale } from '../runtime.js';

const translations = {"ar":"ملف","bn":"File","de":"File","en":"File","es":"File","fr":"File","hi":"File","id":"File","pt-BR":"File","ru":"File","ur":"File","zh-CN":"File"};

export function editor_slash_file_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
