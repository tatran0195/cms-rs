import { getLocale } from '../runtime.js';

const translations = {"ar":"شبكة متجاوبة تضم 4 بطاقات.","bn":"4টি কার্ড সহ একটি প্রতিক্রিয়াশীল গ্রিড।","de":"Ein responsives Raster mit 4 Karten.","en":"A responsive grid with 4 cards.","es":"Una cuadrícula responsiva con 4 cartas.","fr":"Une grille responsive avec 4 cartes.","hi":"4 कार्ड के साथ एक प्रतिक्रियाशील ग्रिड।","id":"Kotak responsif dengan 4 kartu.","pt-BR":"Uma grade responsiva com 4 cartões.","ru":"Адаптивная сетка с 4 карточками.","ur":"4 کارڈز کے ساتھ ایک ذمہ دار گرڈ۔","zh-CN":"具有 4 张卡片的响应式网格。"};

export function editor_slash_cardgrid4_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
