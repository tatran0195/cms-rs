import { getLocale } from '../runtime.js';

const translations = {"ar":"أسبوعيًا","bn":"সাপ্তাহিক","de":"Wöchentlich","en":"Weekly","es":"Semanal","fr":"Hebdomadaire","hi":"साप्ताहिक","id":"Mingguan","pt-BR":"Semanalmente","ru":"Еженедельно","ur":"ہفتہ وار","zh-CN":"每周"};

export function settings_exports_workflow_weekly(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
