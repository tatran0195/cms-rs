import { getLocale } from '../runtime.js';

const translations = {"ar":"نقروا على النشر","bn":"Clicked publish","de":"Clicked publish","en":"Clicked publish","es":"Clicked publish","fr":"Clicked publish","hi":"Clicked publish","id":"Clicked publish","pt-BR":"Clicked publish","ru":"Clicked publish","ur":"Clicked publish","zh-CN":"Clicked publish"};

export function admin_overview_clickedpublish(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
