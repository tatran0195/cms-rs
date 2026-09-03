import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر 90 يومًا","bn":"গত ৯০ দিন","de":"Letzte 90 Tage","en":"Last 90 days","es":"últimos 90 días","fr":"90 derniers jours","hi":"पिछले 90 दिन","id":"90 hari terakhir","pt-BR":"Últimos 90 dias","ru":"Последние 90 дней","ur":"آخری 90 دن","zh-CN":"过去 90 天"};

export function analytics_range_90d(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
