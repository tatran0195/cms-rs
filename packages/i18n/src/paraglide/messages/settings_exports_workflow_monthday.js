import { getLocale } from '../runtime.js';

const translations = {"ar":"يوم الشهر","bn":"মাসের দিন","de":"Tag des Monats","en":"Day of month","es":"Día del mes","fr":"Jour du mois","hi":"महीने का दिन","id":"Hari dalam sebulan","pt-BR":"Dia do mês","ru":"День месяца","ur":"مہینے کا دن","zh-CN":"一个月中的哪一天"};

export function settings_exports_workflow_monthday(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
