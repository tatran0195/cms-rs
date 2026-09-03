import { getLocale } from '../runtime.js';

const translations = {"ar":"الاسم","bn":"Name","de":"Name","en":"Name","es":"Name","fr":"Name","hi":"Name","id":"Name","pt-BR":"Name","ru":"Name","ur":"Name","zh-CN":"Name"};

export function editor_block_nameplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
