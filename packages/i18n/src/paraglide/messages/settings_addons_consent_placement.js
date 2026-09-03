import { getLocale } from '../runtime.js';

const translations = {"ar":"موضع البطاقة","bn":"কার্ডের অবস্থান","de":"Kartenposition","en":"Card placement","es":"Ubicación de la tarjeta","fr":"Position de la carte","hi":"कार्ड का स्थान","id":"Penempatan kartu","pt-BR":"Posição do cartão","ru":"Положение карточки","ur":"کارڈ کا مقام","zh-CN":"卡片位置"};

export function settings_addons_consent_placement(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
