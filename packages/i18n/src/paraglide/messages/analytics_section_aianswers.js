import { getLocale } from '../runtime.js';

const translations = {"ar":"إجابات الذكاء الاصطناعي وتكلفتها","bn":"AI answers and cost","de":"AI answers and cost","en":"AI answers and cost","es":"AI answers and cost","fr":"AI answers and cost","hi":"AI answers and cost","id":"AI answers and cost","pt-BR":"AI answers and cost","ru":"AI answers and cost","ur":"AI answers and cost","zh-CN":"AI answers and cost"};

export function analytics_section_aianswers(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
