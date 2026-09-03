import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد مشاهدات بعد.","bn":"এখনো কোনো পৃষ্ঠা দেখা হয়নি.","de":"Noch keine Seitenaufrufe.","en":"No page views yet.","es":"Aún no hay visitas a la página.","fr":"Aucune page vue pour l'instant.","hi":"अभी तक कोई पृष्ठ दृश्य नहीं.","id":"Belum ada tampilan halaman.","pt-BR":"Nenhuma visualização de página ainda.","ru":"Просмотров страниц пока нет.","ur":"ابھی تک کوئی صفحہ نظر نہیں آیا۔","zh-CN":"还没有页面浏览量。"};

export function analytics_empty_pageviews(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
