import { getLocale } from '../runtime.js';

const translations = {"ar":"بحث هجين","bn":"হাইব্রিড অনুসন্ধান","de":"Hybridsuche","en":"Hybrid search","es":"Búsqueda híbrida","fr":"Recherche hybride","hi":"हाइब्रिड खोज","id":"Pencarian hibrida","pt-BR":"Pesquisa híbrida","ru":"Гибридный поиск","ur":"ہائبرڈ تلاش","zh-CN":"混合搜索"};

export function settings_plan_tier_free_feature_search(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
