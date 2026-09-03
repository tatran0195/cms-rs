import { getLocale } from '../runtime.js';

const translations = {"ar":"Algolia DocSearch","bn":"আলগোলিয়া ডকসার্চ","de":"Algolia DocSearch","en":"Algolia DocSearch","es":"Búsqueda de documentos de Algolia","fr":"Algolia DocSearch","hi":"अल्गोलिया डॉकसर्च","id":"Pencarian Dokumen Algolia","pt-BR":"Algolia DocSearch","ru":"Алголия Поиск документов","ur":"Algolia DocSearch","zh-CN":"阿尔戈利亚文档搜索"};

export function settings_search_provider_algolia(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
