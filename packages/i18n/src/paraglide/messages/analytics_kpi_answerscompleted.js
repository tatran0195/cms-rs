import { getLocale } from '../runtime.js';

const translations = {"ar":"إجابات الذكاء الاصطناعي المكتملة","bn":"AI answers completed","de":"AI answers completed","en":"AI answers completed","es":"AI answers completed","fr":"AI answers completed","hi":"AI answers completed","id":"AI answers completed","pt-BR":"AI answers completed","ru":"AI answers completed","ur":"AI answers completed","zh-CN":"AI answers completed"};

export function analytics_kpi_answerscompleted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
