import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض كل التحليلات","bn":"সমস্ত বিশ্লেষণ দেখুন","de":"Alle Analysen anzeigen","en":"View all analytics","es":"Ver todos los análisis","fr":"Afficher toutes les analyses","hi":"सभी विश्लेषण देखें","id":"Lihat semua analitik","pt-BR":"Ver todas as análises","ru":"Посмотреть всю аналитику","ur":"تمام تجزیات دیکھیں","zh-CN":"查看所有分析"};

export function analytics_traffic_viewall(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
