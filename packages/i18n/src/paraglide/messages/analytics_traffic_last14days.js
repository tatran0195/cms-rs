import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر ١٤ يومًا","bn":"গত 14 দিন","de":"letzten 14 Tage","en":"last 14 days","es":"últimos 14 días","fr":"14 derniers jours","hi":"पिछले 14 दिन","id":"14 hari terakhir","pt-BR":"últimos 14 dias","ru":"последние 14 дней","ur":"آخری 14 دن","zh-CN":"过去 14 天"};

export function analytics_traffic_last14days(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
