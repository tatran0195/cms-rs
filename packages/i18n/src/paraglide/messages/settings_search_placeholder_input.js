import { getLocale } from '../runtime.js';

const translations = {"ar":"ابحث في التوثيق…","bn":"ডক্স অনুসন্ধান করুন...","de":"Durchsuchen Sie die Dokumente…","en":"Search the docs…","es":"Busque en los documentos...","fr":"Rechercher dans les documents…","hi":"दस्तावेज़ खोजें...","id":"Telusuri dokumen…","pt-BR":"Pesquise os documentos…","ru":"Искать документы…","ur":"دستاویزات تلاش کریں…","zh-CN":"搜索文档..."};

export function settings_search_placeholder_input(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
