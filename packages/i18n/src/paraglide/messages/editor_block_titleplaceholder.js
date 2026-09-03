import { getLocale } from '../runtime.js';

const translations = {"ar":"العنوان","bn":"Title","de":"Title","en":"Title","es":"Title","fr":"Title","hi":"Title","id":"Title","pt-BR":"Title","ru":"Title","ur":"Title","zh-CN":"Title"};

export function editor_block_titleplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
