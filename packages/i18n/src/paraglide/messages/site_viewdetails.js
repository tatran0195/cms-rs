import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض التفاصيل","bn":"বিস্তারিত দেখুন","de":"Details anzeigen","en":"View details","es":"Ver detalles","fr":"Afficher les détails","hi":"विवरण देखें","id":"Lihat detailnya","pt-BR":"Ver detalhes","ru":"Посмотреть детали","ur":"تفصیلات دیکھیں","zh-CN":"查看详情"};

export function site_viewdetails(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
