import { getLocale } from '../runtime.js';

const translations = {"ar":"مثال مؤلف لطلب API.","bn":"An authored API request example.","de":"An authored API request example.","en":"An authored API request example.","es":"An authored API request example.","fr":"An authored API request example.","hi":"An authored API request example.","id":"An authored API request example.","pt-BR":"An authored API request example.","ru":"An authored API request example.","ur":"An authored API request example.","zh-CN":"An authored API request example."};

export function editor_slash_requestexample_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
