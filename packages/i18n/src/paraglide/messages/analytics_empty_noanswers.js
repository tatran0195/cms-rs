import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد أحداث لعدم وجود إجابة في هذه الفترة.","bn":"No no-answer events in this period.","de":"No no-answer events in this period.","en":"No no-answer events in this period.","es":"No no-answer events in this period.","fr":"No no-answer events in this period.","hi":"No no-answer events in this period.","id":"No no-answer events in this period.","pt-BR":"No no-answer events in this period.","ru":"No no-answer events in this period.","ur":"No no-answer events in this period.","zh-CN":"No no-answer events in this period."};

export function analytics_empty_noanswers(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
