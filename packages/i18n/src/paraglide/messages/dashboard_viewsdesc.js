import { getLocale } from '../runtime.js';

const translations = {"ar":"عبر كل مواقعك","bn":"আপনার সমস্ত সাইট জুড়ে","de":"Auf allen Ihren Websites","en":"Across all your sites","es":"En todos sus sitios","fr":"Sur tous vos sites","hi":"आपकी सभी साइटों पर","id":"Di seluruh situs Anda","pt-BR":"Em todos os seus sites","ru":"На всех ваших сайтах","ur":"آپ کی تمام سائٹس پر","zh-CN":"在您的所有网站上"};

export function dashboard_viewsdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
