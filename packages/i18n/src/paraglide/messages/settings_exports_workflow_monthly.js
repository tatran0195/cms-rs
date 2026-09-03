import { getLocale } from '../runtime.js';

const translations = {"ar":"شهريًا","bn":"মাসিক","de":"Monatlich","en":"Monthly","es":"Mensual","fr":"Mensuel","hi":"मासिक","id":"Bulanan","pt-BR":"Mensalmente","ru":"Ежемесячно","ur":"ماہانہ","zh-CN":"每月"};

export function settings_exports_workflow_monthly(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
