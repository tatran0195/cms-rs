import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد مشكلات تطابق هذا الصف والبحث.","bn":"No issues match this queue and search.","de":"No issues match this queue and search.","en":"No issues match this queue and search.","es":"No issues match this queue and search.","fr":"No issues match this queue and search.","hi":"No issues match this queue and search.","id":"No issues match this queue and search.","pt-BR":"No issues match this queue and search.","ru":"No issues match this queue and search.","ur":"No issues match this queue and search.","zh-CN":"No issues match this queue and search."};

export function admin_operations_emptyissues(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
