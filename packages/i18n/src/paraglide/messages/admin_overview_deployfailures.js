import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات النشر الفاشلة","bn":"Deploy failures","de":"Deploy failures","en":"Deploy failures","es":"Deploy failures","fr":"Deploy failures","hi":"Deploy failures","id":"Deploy failures","pt-BR":"Deploy failures","ru":"Deploy failures","ur":"Deploy failures","zh-CN":"Deploy failures"};

export function admin_overview_deployfailures(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
