import { getLocale } from '../runtime.js';

const translations = {"ar":"إجابات الذكاء الاصطناعي الفاشلة","bn":"AI answers failed","de":"AI answers failed","en":"AI answers failed","es":"AI answers failed","fr":"AI answers failed","hi":"AI answers failed","id":"AI answers failed","pt-BR":"AI answers failed","ru":"AI answers failed","ur":"AI answers failed","zh-CN":"AI answers failed"};

export function analytics_kpi_answersfailed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
