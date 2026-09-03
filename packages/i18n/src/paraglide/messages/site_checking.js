import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ التحقق…","bn":"Checking…","de":"Checking…","en":"Checking…","es":"Checking…","fr":"Checking…","hi":"Checking…","id":"Checking…","pt-BR":"Checking…","ru":"Checking…","ur":"Checking…","zh-CN":"Checking…"};

export function site_checking(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
