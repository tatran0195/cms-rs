import { getLocale } from '../runtime.js';

const translations = {"ar":"مشاهدات الصفحات","bn":"পৃষ্ঠা দর্শন","de":"Seitenaufrufe","en":"Pageviews","es":"Páginas vistas","fr":"Pages vues","hi":"पृष्ठदृश्य","id":"Tampilan Halaman","pt-BR":"Visualizações de página","ru":"Просмотры страниц","ur":"صفحہ کے ملاحظات","zh-CN":"浏览量"};

export function settings_usage_pageviews(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
