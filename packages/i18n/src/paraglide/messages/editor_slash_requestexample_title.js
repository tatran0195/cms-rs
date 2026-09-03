import { getLocale } from '../runtime.js';

const translations = {"ar":"مثال الطلب","bn":"Request example","de":"Request example","en":"Request example","es":"Request example","fr":"Request example","hi":"Request example","id":"Request example","pt-BR":"Request example","ru":"Request example","ur":"Request example","zh-CN":"Request example"};

export function editor_slash_requestexample_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
