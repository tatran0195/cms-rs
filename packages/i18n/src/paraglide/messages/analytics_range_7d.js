import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر 7 أيام","bn":"গত ৭ দিন","de":"Letzte 7 Tage","en":"Last 7 days","es":"últimos 7 días","fr":"7 derniers jours","hi":"पिछले 7 दिन","id":"7 hari terakhir","pt-BR":"Últimos 7 dias","ru":"Последние 7 дней","ur":"آخری 7 دن","zh-CN":"过去 7 天"};

export function analytics_range_7d(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
