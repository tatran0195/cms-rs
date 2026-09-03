import { getLocale } from '../runtime.js';

const translations = {"ar":"مثال API","bn":"API example","de":"API example","en":"API example","es":"API example","fr":"API example","hi":"API example","id":"API example","pt-BR":"API example","ru":"API example","ur":"API example","zh-CN":"API example"};

export function editor_slash_apiexample_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
