import { getLocale } from '../runtime.js';

const translations = {"ar":"شبكة من 4 بطاقات","bn":"4-কার্ড গ্রিড","de":"4-Karten-Raster","en":"4-card grid","es":"cuadrícula de 4 cartas","fr":"Grille de 4 cartes","hi":"4-कार्ड ग्रिड","id":"kisi 4 kartu","pt-BR":"Grade de 4 cartas","ru":"сетка из 4 карт","ur":"4 کارڈ گرڈ","zh-CN":"4 卡网格"};

export function editor_slash_cardgrid4_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
