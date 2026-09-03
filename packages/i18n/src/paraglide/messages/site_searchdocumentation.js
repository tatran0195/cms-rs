import { getLocale } from '../runtime.js';

const translations = {"ar":"البحث في الوثائق","bn":"অনুসন্ধান ডকুমেন্টেশন","de":"Dokumentation durchsuchen","en":"Search documentation","es":"Buscar documentación","fr":"Rechercher de la documentation","hi":"दस्तावेज़ खोजें","id":"Cari dokumentasi","pt-BR":"Pesquisar documentação","ru":"Поиск документации","ur":"دستاویزات تلاش کریں۔","zh-CN":"搜索文档"};

export function site_searchdocumentation(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
