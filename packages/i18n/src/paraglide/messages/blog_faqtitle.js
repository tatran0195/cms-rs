import { getLocale } from '../runtime.js';

const translations = {"ar":"أسئلة شائعة","bn":"Frequently asked questions","de":"Frequently asked questions","en":"Frequently asked questions","es":"Frequently asked questions","fr":"Frequently asked questions","hi":"Frequently asked questions","id":"Frequently asked questions","pt-BR":"Frequently asked questions","ru":"Frequently asked questions","ur":"Frequently asked questions","zh-CN":"Frequently asked questions"};

export function blog_faqtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
