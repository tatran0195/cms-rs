import { getLocale } from '../runtime.js';

const translations = {"ar":"تحليلات اختيارية","bn":"Optional analytics","de":"Optional analytics","en":"Optional analytics","es":"Optional analytics","fr":"Optional analytics","hi":"Optional analytics","id":"Optional analytics","pt-BR":"Optional analytics","ru":"Optional analytics","ur":"Optional analytics","zh-CN":"Optional analytics"};

export function site_analyticsconsenttitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
