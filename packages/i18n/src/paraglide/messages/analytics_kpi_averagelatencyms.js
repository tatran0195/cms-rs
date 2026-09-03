import { getLocale } from '../runtime.js';

const translations = {"ar":"متوسط زمن الاستجابة (مللي ثانية)","bn":"Average latency (ms)","de":"Average latency (ms)","en":"Average latency (ms)","es":"Average latency (ms)","fr":"Average latency (ms)","hi":"Average latency (ms)","id":"Average latency (ms)","pt-BR":"Average latency (ms)","ru":"Average latency (ms)","ur":"Average latency (ms)","zh-CN":"Average latency (ms)"};

export function analytics_kpi_averagelatencyms(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
