import { getLocale } from '../runtime.js';

const translations = {"ar":"شبكة من البطاقات القابلة للربط.","bn":"লিঙ্কযোগ্য কার্ডের একটি গ্রিড।","de":"Ein Raster aus verknüpfbaren Karten.","en":"A grid of linkable cards.","es":"Una cuadrícula de tarjetas enlazables.","fr":"Une grille de cartes pouvant être liées.","hi":"लिंक करने योग्य कार्डों की एक ग्रिड.","id":"Kotak kartu yang dapat ditautkan.","pt-BR":"Uma grade de cartões conectáveis.","ru":"Сетка связанных карточек.","ur":"لنک ایبل کارڈز کا ایک گرڈ۔","zh-CN":"可链接卡片的网格。"};

export function editor_slash_cardgroup_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
