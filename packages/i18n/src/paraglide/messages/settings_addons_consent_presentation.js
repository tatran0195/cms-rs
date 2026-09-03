import { getLocale } from '../runtime.js';

const translations = {"ar":"كثافة البطاقة","bn":"কার্ডের ঘনত্ব","de":"Kartendichte","en":"Card density","es":"Densidad de la tarjeta","fr":"Densité de la carte","hi":"कार्ड का घनत्व","id":"Kepadatan kartu","pt-BR":"Densidade do cartão","ru":"Плотность карточки","ur":"کارڈ کی کثافت","zh-CN":"卡片密度"};

export function settings_addons_consent_presentation(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
