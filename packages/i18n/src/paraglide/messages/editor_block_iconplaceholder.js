import { getLocale } from '../runtime.js';

const translations = {"ar":"الأيقونة","bn":"Icon","de":"Icon","en":"Icon","es":"Icon","fr":"Icon","hi":"Icon","id":"Icon","pt-BR":"Icon","ru":"Icon","ur":"Icon","zh-CN":"Icon"};

export function editor_block_iconplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
