import { getLocale } from '../runtime.js';

const translations = {"ar":"المشاهدات (٣٠ يومًا)","bn":"পৃষ্ঠা দেখা (30d)","de":"Seitenaufrufe (30 Tage)","en":"Pageviews (30d)","es":"Páginas vistas (30d)","fr":"Pages vues (30j)","hi":"पृष्ठदृश्य (30 दिन)","id":"Tayangan Halaman (30d)","pt-BR":"Visualizações de página (30d)","ru":"Просмотры страниц (30 дней)","ur":"صفحہ کے ملاحظات (30d)","zh-CN":"综合浏览量 (30 天)"};

export function overview_stats_pageviews(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
