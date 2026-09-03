import { getLocale } from '../runtime.js';

const translations = {"ar":"أهم الصفحات عبر جميع المستندات","bn":"সমস্ত নথিতে শীর্ষ পৃষ্ঠাগুলি৷","de":"Top-Seiten in allen Dokumenten","en":"Top pages across all docs","es":"Páginas principales en todos los documentos","fr":"Principales pages de tous les documents","hi":"सभी दस्तावेज़ों में शीर्ष पृष्ठ","id":"Halaman teratas di seluruh dokumen","pt-BR":"Principais páginas de todos os documentos","ru":"Лучшие страницы во всех документах","ur":"تمام دستاویزات میں سرفہرست صفحات","zh-CN":"所有文档的首页"};

export function analytics_section_toppagesalldocs(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
