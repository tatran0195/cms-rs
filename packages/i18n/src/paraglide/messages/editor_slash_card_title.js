import { getLocale } from '../runtime.js';

const translations = {"ar":"بطاقة","bn":"কার্ড","de":"Karte","en":"Card","es":"tarjeta","fr":"Carte","hi":"कार्ड","id":"Kartu","pt-BR":"Cartão","ru":"Карта","ur":"کارڈ","zh-CN":"卡"};

export function editor_slash_card_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
