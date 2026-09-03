import { getLocale } from '../runtime.js';

const translations = {"ar":"مشاهدات الصفحة عبر جميع المستندات","bn":"সমস্ত ডক্স জুড়ে পৃষ্ঠাদর্শন","de":"Seitenaufrufe in allen Dokumenten","en":"pageviews across all docs","es":"páginas vistas en todos los documentos","fr":"pages vues dans tous les documents","hi":"सभी दस्तावेज़ों में पृष्ठदृश्य","id":"tampilan halaman di seluruh dokumen","pt-BR":"visualizações de página em todos os documentos","ru":"просмотры страниц во всех документах","ur":"تمام دستاویزات میں صفحہ کے ملاحظات","zh-CN":"所有文档的综合浏览量"};

export function analytics_traffic_pageviewsalldocs(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
