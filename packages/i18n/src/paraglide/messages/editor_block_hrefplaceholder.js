import { getLocale } from '../runtime.js';

const translations = {"ar":"الرابط","bn":"Link","de":"Link","en":"Link","es":"Link","fr":"Link","hi":"Link","id":"Link","pt-BR":"Link","ru":"Link","ur":"Link","zh-CN":"Link"};

export function editor_block_hrefplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
