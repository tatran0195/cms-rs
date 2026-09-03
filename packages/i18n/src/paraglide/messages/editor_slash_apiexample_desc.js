import { getLocale } from '../runtime.js';

const translations = {"ar":"مثال يجمع الطلب والاستجابة.","bn":"A paired request and response example.","de":"A paired request and response example.","en":"A paired request and response example.","es":"A paired request and response example.","fr":"A paired request and response example.","hi":"A paired request and response example.","id":"A paired request and response example.","pt-BR":"A paired request and response example.","ru":"A paired request and response example.","ur":"A paired request and response example.","zh-CN":"A paired request and response example."};

export function editor_slash_apiexample_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
