import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر 30 يومًا","bn":"গত 30 দিন","de":"Letzte 30 Tage","en":"Last 30 days","es":"últimos 30 días","fr":"30 derniers jours","hi":"पिछले 30 दिन","id":"30 hari terakhir","pt-BR":"Últimos 30 dias","ru":"Последние 30 дней","ur":"آخری 30 دن","zh-CN":"过去 30 天"};

export function analytics_range_30d(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
