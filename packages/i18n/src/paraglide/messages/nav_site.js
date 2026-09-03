import { getLocale } from '../runtime.js';

const translations = {"ar":"موقع ويب","bn":"ওয়েবসাইট","de":"Website","en":"Website","es":"Sitio web","fr":"Site Web","hi":"वेबसाइट","id":"Situs web","pt-BR":"Site","ru":"Веб-сайт","ur":"ویب سائٹ","zh-CN":"网站"};

export function nav_site(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
