import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات التصدير","bn":"Exports","de":"Exports","en":"Exports","es":"Exports","fr":"Exports","hi":"Exports","id":"Exports","pt-BR":"Exports","ru":"Exports","ur":"Exports","zh-CN":"Exports"};

export function admin_operations_exports(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
