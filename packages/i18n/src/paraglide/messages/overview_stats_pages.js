import { getLocale } from '../runtime.js';

const translations = {"ar":"الصفحات","bn":"পাতা","de":"Seiten","en":"Pages","es":"paginas","fr":"Pages","hi":"पन्ने","id":"Halaman","pt-BR":"Páginas","ru":"Страницы","ur":"صفحات","zh-CN":"页数"};

export function overview_stats_pages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
