import { getLocale } from '../runtime.js';

const translations = {"ar":"الصفحات الأخيرة","bn":"সাম্প্রতিক পৃষ্ঠাগুলি","de":"Aktuelle Seiten","en":"Recent pages","es":"Paginas recientes","fr":"Pages récentes","hi":"हाल के पन्ने","id":"Halaman terkini","pt-BR":"Páginas recentes","ru":"Последние страницы","ur":"حالیہ صفحات","zh-CN":"最近的页面"};

export function overview_recentpages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
