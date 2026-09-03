import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر تحميل مصدر واحد أو أكثر من بيانات النظرة العامة.","bn":"One or more overview data sources could not be loaded.","de":"One or more overview data sources could not be loaded.","en":"One or more overview data sources could not be loaded.","es":"One or more overview data sources could not be loaded.","fr":"One or more overview data sources could not be loaded.","hi":"One or more overview data sources could not be loaded.","id":"One or more overview data sources could not be loaded.","pt-BR":"One or more overview data sources could not be loaded.","ru":"One or more overview data sources could not be loaded.","ur":"One or more overview data sources could not be loaded.","zh-CN":"One or more overview data sources could not be loaded."};

export function admin_overview_loaderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
