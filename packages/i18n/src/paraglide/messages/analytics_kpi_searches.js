import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات البحث","bn":"অনুসন্ধান করে","de":"Suchen","en":"Searches","es":"Búsquedas","fr":"Recherches","hi":"खोजता है","id":"Pencarian","pt-BR":"Pesquisas","ru":"Поиски","ur":"تلاش کرتا ہے۔","zh-CN":"搜索次数"};

export function analytics_kpi_searches(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
