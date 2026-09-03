import { getLocale } from '../runtime.js';

const translations = {"ar":"الكثافة","bn":"ঘনত্ব","de":"Dichte","en":"Density","es":"densidad","fr":"Densité","hi":"घनत्व","id":"Kepadatan","pt-BR":"Densidade","ru":"Плотность","ur":"کثافت","zh-CN":"密度"};

export function settings_theme_density(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
