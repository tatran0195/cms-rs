import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد عمليات مطابقة","bn":"No matching operations","de":"No matching operations","en":"No matching operations","es":"No matching operations","fr":"No matching operations","hi":"No matching operations","id":"No matching operations","pt-BR":"No matching operations","ru":"No matching operations","ur":"No matching operations","zh-CN":"No matching operations"};

export function admin_operations_empty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
