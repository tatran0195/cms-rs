import { getLocale } from '../runtime.js';

const translations = {"ar":"/شهرياً","bn":"/মাস","de":"/Mo","en":"/mo","es":"/mes","fr":"/mois","hi":"/मो","id":"/bln","pt-BR":"/ mês","ru":"/мес.","ur":"/ماہ","zh-CN":"/月"};

export function settings_plan_permonth(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
