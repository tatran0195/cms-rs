import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات التصدير الفاشلة","bn":"Failed Exports","de":"Failed Exports","en":"Failed Exports","es":"Failed Exports","fr":"Failed Exports","hi":"Failed Exports","id":"Failed Exports","pt-BR":"Failed Exports","ru":"Failed Exports","ur":"Failed Exports","zh-CN":"Failed Exports"};

export function admin_operations_failedexports(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
