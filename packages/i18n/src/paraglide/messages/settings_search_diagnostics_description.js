import { getLocale } from '../runtime.js';

const translations = {"ar":"افحص صحة الفهرسة وبيانات وصفية محدودة وآمنة للخصوصية للإصدار المنشور الحالي.","bn":"Inspect privacy-safe indexing health and bounded metadata for the current published revision.","de":"Inspect privacy-safe indexing health and bounded metadata for the current published revision.","en":"Inspect privacy-safe indexing health and bounded metadata for the current published revision.","es":"Inspect privacy-safe indexing health and bounded metadata for the current published revision.","fr":"Inspect privacy-safe indexing health and bounded metadata for the current published revision.","hi":"Inspect privacy-safe indexing health and bounded metadata for the current published revision.","id":"Inspect privacy-safe indexing health and bounded metadata for the current published revision.","pt-BR":"Inspect privacy-safe indexing health and bounded metadata for the current published revision.","ru":"Inspect privacy-safe indexing health and bounded metadata for the current published revision.","ur":"Inspect privacy-safe indexing health and bounded metadata for the current published revision.","zh-CN":"Inspect privacy-safe indexing health and bounded metadata for the current published revision."};

export function settings_search_diagnostics_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
