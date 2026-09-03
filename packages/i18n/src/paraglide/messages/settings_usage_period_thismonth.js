import { getLocale } from '../runtime.js';

const translations = {"ar":"هذا الشهر","bn":"এই মাসে","de":"Diesen Monat","en":"This month","es":"este mes","fr":"Ce mois-ci","hi":"इस महीने","id":"Bulan ini","pt-BR":"Este mês","ru":"В этом месяце","ur":"اس مہینے","zh-CN":"这个月"};

export function settings_usage_period_thismonth(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
