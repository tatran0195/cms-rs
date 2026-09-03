import { getLocale } from '../runtime.js';

const translations = {"ar":"مقارنة منصات التوثيق","bn":"Documentation platform comparison","de":"Documentation platform comparison","en":"Documentation platform comparison","es":"Documentation platform comparison","fr":"Documentation platform comparison","hi":"Documentation platform comparison","id":"Documentation platform comparison","pt-BR":"Documentation platform comparison","ru":"Documentation platform comparison","ur":"Documentation platform comparison","zh-CN":"Documentation platform comparison"};

export function marketing_arabicplatforms_breadcrumb(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
