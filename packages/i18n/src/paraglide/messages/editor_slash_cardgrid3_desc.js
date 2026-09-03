import { getLocale } from '../runtime.js';

const translations = {"ar":"شبكة متجاوبة تضم 3 بطاقات.","bn":"3টি কার্ড সহ একটি প্রতিক্রিয়াশীল গ্রিড।","de":"Ein responsives Raster mit 3 Karten.","en":"A responsive grid with 3 cards.","es":"Una cuadrícula responsiva con 3 cartas.","fr":"Une grille responsive avec 3 cartes.","hi":"3 कार्ड के साथ एक प्रतिक्रियाशील ग्रिड।","id":"Kotak responsif dengan 3 kartu.","pt-BR":"Uma grade responsiva com 3 cartões.","ru":"Адаптивная сетка с 3 карточками.","ur":"3 کارڈز کے ساتھ ایک ذمہ دار گرڈ۔","zh-CN":"包含 3 张卡片的响应式网格。"};

export function editor_slash_cardgrid3_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
