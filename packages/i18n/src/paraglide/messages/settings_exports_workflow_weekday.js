import { getLocale } from '../runtime.js';

const translations = {"ar":"يوم الأسبوع","bn":"সপ্তাহের দিন","de":"Wochentag","en":"Weekday","es":"Día laborable","fr":"Jour de la semaine","hi":"कार्यदिवस","id":"hari kerja","pt-BR":"Dia da semana","ru":"Будний день","ur":"ہفتے کا دن","zh-CN":"工作日"};

export function settings_exports_workflow_weekday(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
