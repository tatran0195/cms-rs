import { getLocale } from '../runtime.js';

const translations = {"ar":"تكلفة الذكاء الاصطناعي (وحدات مصغرة)","bn":"AI cost (micro-units)","de":"AI cost (micro-units)","en":"AI cost (micro-units)","es":"AI cost (micro-units)","fr":"AI cost (micro-units)","hi":"AI cost (micro-units)","id":"AI cost (micro-units)","pt-BR":"AI cost (micro-units)","ru":"AI cost (micro-units)","ur":"AI cost (micro-units)","zh-CN":"AI cost (micro-units)"};

export function analytics_kpi_aicostmicros(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
