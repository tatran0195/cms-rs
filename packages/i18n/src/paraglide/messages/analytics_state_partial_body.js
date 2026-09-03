import { getLocale } from '../runtime.js';

const translations = {"ar":"تظهر المقاييس المتاحة، وتبقى قيم رموز الذكاء الاصطناعي أو تكلفته أو زمنه المفقودة غير معروفة.","bn":"Available metrics are shown, while missing AI token, cost, or latency values remain unknown.","de":"Available metrics are shown, while missing AI token, cost, or latency values remain unknown.","en":"Available metrics are shown, while missing AI token, cost, or latency values remain unknown.","es":"Available metrics are shown, while missing AI token, cost, or latency values remain unknown.","fr":"Available metrics are shown, while missing AI token, cost, or latency values remain unknown.","hi":"Available metrics are shown, while missing AI token, cost, or latency values remain unknown.","id":"Available metrics are shown, while missing AI token, cost, or latency values remain unknown.","pt-BR":"Available metrics are shown, while missing AI token, cost, or latency values remain unknown.","ru":"Available metrics are shown, while missing AI token, cost, or latency values remain unknown.","ur":"Available metrics are shown, while missing AI token, cost, or latency values remain unknown.","zh-CN":"Available metrics are shown, while missing AI token, cost, or latency values remain unknown."};

export function analytics_state_partial_body(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
