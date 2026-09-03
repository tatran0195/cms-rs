import { getLocale } from '../runtime.js';

const translations = {"ar":"مشاهدات الصفحة","bn":"পৃষ্ঠা দর্শন","de":"Seitenaufrufe","en":"Page views","es":"Vistas de página","fr":"Pages vues","hi":"पृष्ठ दृश्य","id":"Tampilan halaman","pt-BR":"Visualizações de página","ru":"Просмотры страниц","ur":"صفحہ کے نظارے","zh-CN":"页面浏览量"};

export function analytics_kpi_pageviews(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
