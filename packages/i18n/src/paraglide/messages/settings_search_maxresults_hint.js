import { getLocale } from '../runtime.js';

const translations = {"ar":"الحد الأقصى للنتائج لكل بحث. استخدم رقمًا من 1 إلى 50.","bn":"Maximum results returned per query. Use 1–50.","de":"Maximum results returned per query. Use 1–50.","en":"Maximum results returned per query. Use 1–50.","es":"Maximum results returned per query. Use 1–50.","fr":"Maximum results returned per query. Use 1–50.","hi":"Maximum results returned per query. Use 1–50.","id":"Maximum results returned per query. Use 1–50.","pt-BR":"Maximum results returned per query. Use 1–50.","ru":"Maximum results returned per query. Use 1–50.","ur":"Maximum results returned per query. Use 1–50.","zh-CN":"Maximum results returned per query. Use 1–50."};

export function settings_search_maxresults_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
