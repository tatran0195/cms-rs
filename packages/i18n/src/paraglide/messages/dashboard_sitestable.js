import { getLocale } from '../runtime.js';

const translations = {"ar":"كل المواقع","bn":"সব সাইট","de":"Alle Seiten","en":"All sites","es":"Todos los sitios","fr":"Tous les sites","hi":"सभी साइटें","id":"Semua situs","pt-BR":"Todos os sites","ru":"Все сайты","ur":"تمام سائٹس","zh-CN":"所有网站"};

export function dashboard_sitestable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
