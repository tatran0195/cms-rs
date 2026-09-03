import { getLocale } from '../runtime.js';

const translations = {"ar":"المواقع","bn":"সাইট","de":"Websites","en":"Sites","es":"Sitios","fr":"Sites","hi":"साइटें","id":"Situs","pt-BR":"Locais","ru":"Сайты","ur":"سائٹس","zh-CN":"站点"};

export function nav_sites(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
