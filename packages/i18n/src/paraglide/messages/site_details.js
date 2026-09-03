import { getLocale } from '../runtime.js';

const translations = {"ar":"التفاصيل","bn":"বিস্তারিত","de":"Einzelheiten","en":"Details","es":"Detalles","fr":"Détails","hi":"विवरण","id":"Detail","pt-BR":"Detalhes","ru":"Подробности","ur":"تفصیلات","zh-CN":"详情"};

export function site_details(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
