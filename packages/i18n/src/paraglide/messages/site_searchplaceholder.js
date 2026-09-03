import { getLocale } from '../runtime.js';

const translations = {"ar":"ابحث في الوثائق…","bn":"ডকুমেন্টেশন অনুসন্ধান করুন…","de":"Dokumentation durchsuchen…","en":"Search documentation…","es":"Buscar documentación…","fr":"Rechercher des documents…","hi":"दस्तावेज़ खोजें...","id":"Telusuri dokumentasi…","pt-BR":"Pesquisar documentação…","ru":"Поиск документации…","ur":"دستاویزات تلاش کریں…","zh-CN":"搜索文档..."};

export function site_searchplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
