import { getLocale } from '../runtime.js';

const translations = {"ar":"البطاقات","bn":"কার্ড","de":"Karten","en":"Cards","es":"Tarjetas","fr":"Cartes","hi":"कार्ड","id":"Kartu-kartu","pt-BR":"Cartões","ru":"Карты","ur":"کارڈز","zh-CN":"卡片"};

export function settings_theme_cards(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
