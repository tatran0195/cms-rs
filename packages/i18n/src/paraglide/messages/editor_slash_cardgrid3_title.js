import { getLocale } from '../runtime.js';

const translations = {"ar":"شبكة من 3 بطاقات","bn":"3-কার্ড গ্রিড","de":"3-Karten-Raster","en":"3-card grid","es":"cuadrícula de 3 cartas","fr":"Grille de 3 cartes","hi":"3-कार्ड ग्रिड","id":"kisi 3 kartu","pt-BR":"Grade de 3 cartas","ru":"сетка из 3 карт","ur":"3 کارڈ گرڈ","zh-CN":"3 卡网格"};

export function editor_slash_cardgrid3_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
