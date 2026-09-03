import { getLocale } from '../runtime.js';

const translations = {"ar":"بطاقة","bn":"কার্ড","de":"Karte","en":"Card","es":"Tarjeta","fr":"Carte","hi":"कार्ड","id":"Kartu","pt-BR":"Cartão","ru":"Карточка","ur":"کارڈ","zh-CN":"卡片"};

export function settings_addons_feedback_presentation_card(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
