import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد أحداث لإجابات الذكاء الاصطناعي في هذه الفترة.","bn":"No AI answer events in this period.","de":"No AI answer events in this period.","en":"No AI answer events in this period.","es":"No AI answer events in this period.","fr":"No AI answer events in this period.","hi":"No AI answer events in this period.","id":"No AI answer events in this period.","pt-BR":"No AI answer events in this period.","ru":"No AI answer events in this period.","ur":"No AI answer events in this period.","zh-CN":"No AI answer events in this period."};

export function analytics_empty_ai(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
