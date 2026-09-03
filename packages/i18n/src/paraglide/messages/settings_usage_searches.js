import { getLocale } from '../runtime.js';

const translations = {"ar":"استعلامات البحث","bn":"অনুসন্ধান অনুসন্ধান","de":"Suchanfragen","en":"Search queries","es":"Consultas de búsqueda","fr":"Requêtes de recherche","hi":"खोज क्वेरी","id":"Kueri penelusuran","pt-BR":"Consultas de pesquisa","ru":"Поисковые запросы","ur":"تلاش کے سوالات","zh-CN":"搜索查询"};

export function settings_usage_searches(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
