import { getLocale } from '../runtime.js';

const translations = {"ar":"الزوار الفريدون","bn":"অনন্য দর্শক","de":"Einzigartige Besucher","en":"Unique visitors","es":"Visitantes únicos","fr":"Visiteurs uniques","hi":"अद्वितीय आगंतुक","id":"Pengunjung unik","pt-BR":"Visitantes únicos","ru":"Уникальные посетители","ur":"منفرد زائرین","zh-CN":"独特的访客"};

export function analytics_kpi_uniquevisitors(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
