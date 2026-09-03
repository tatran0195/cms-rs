import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات بحث بلا نتائج","bn":"Zero-result searches","de":"Zero-result searches","en":"Zero-result searches","es":"Zero-result searches","fr":"Zero-result searches","hi":"Zero-result searches","id":"Zero-result searches","pt-BR":"Zero-result searches","ru":"Zero-result searches","ur":"Zero-result searches","zh-CN":"Zero-result searches"};

export function analytics_kpi_zeroresults(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
