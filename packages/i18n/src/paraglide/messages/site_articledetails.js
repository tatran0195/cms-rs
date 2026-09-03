import { getLocale } from '../runtime.js';

const translations = {"ar":"تفاصيل المقالة","bn":"নিবন্ধ বিবরণ","de":"Artikeldetails","en":"Article details","es":"Detalles del artículo","fr":"Détails de l'article","hi":"आलेख विवरण","id":"Detail artikel","pt-BR":"Detalhes do artigo","ru":"Подробности статьи","ur":"مضمون کی تفصیلات","zh-CN":"文章详情"};

export function site_articledetails(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
