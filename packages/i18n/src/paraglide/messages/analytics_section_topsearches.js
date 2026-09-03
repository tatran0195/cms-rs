import { getLocale } from '../runtime.js';

const translations = {"ar":"أكثر عمليات البحث","bn":"শীর্ষ অনুসন্ধান","de":"Top-Suchanfragen","en":"Top searches","es":"Búsquedas principales","fr":"Recherches les plus fréquentes","hi":"शीर्ष खोजें","id":"Pencarian teratas","pt-BR":"Principais pesquisas","ru":"Популярные поисковые запросы","ur":"سرفہرست تلاشیں۔","zh-CN":"热门搜索"};

export function analytics_section_topsearches(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
