import { getLocale } from '../runtime.js';

const translations = {"ar":"التسمية التوضيحية","bn":"Caption","de":"Caption","en":"Caption","es":"Caption","fr":"Caption","hi":"Caption","id":"Caption","pt-BR":"Caption","ru":"Caption","ur":"Caption","zh-CN":"Caption"};

export function editor_block_captionplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
