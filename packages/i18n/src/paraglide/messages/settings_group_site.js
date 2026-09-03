import { getLocale } from '../runtime.js';

const translations = {"ar":"الموقع","bn":"সাইট","de":"Website","en":"Site","es":"Sitio","fr":"Site","hi":"साइट","id":"Situs","pt-BR":"Local","ru":"Сайт","ur":"سائٹ","zh-CN":"网站"};

export function settings_group_site(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
