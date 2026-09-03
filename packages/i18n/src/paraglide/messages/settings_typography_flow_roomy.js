import { getLocale } from '../runtime.js';

const translations = {"ar":"فسيح","bn":"প্রশস্ত","de":"Geräumig","en":"Roomy","es":"Espacioso","fr":"Spacieux","hi":"विशाल","id":"lapang","pt-BR":"Espaçoso","ru":"Вместительный","ur":"کشادہ","zh-CN":"宽敞"};

export function settings_typography_flow_roomy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
