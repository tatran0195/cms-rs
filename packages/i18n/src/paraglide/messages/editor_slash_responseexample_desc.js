import { getLocale } from '../runtime.js';

const translations = {"ar":"مثال مؤلف لاستجابة API.","bn":"An authored API response example.","de":"An authored API response example.","en":"An authored API response example.","es":"An authored API response example.","fr":"An authored API response example.","hi":"An authored API response example.","id":"An authored API response example.","pt-BR":"An authored API response example.","ru":"An authored API response example.","ur":"An authored API response example.","zh-CN":"An authored API response example."};

export function editor_slash_responseexample_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
