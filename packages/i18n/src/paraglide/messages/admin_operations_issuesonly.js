import { getLocale } from '../runtime.js';

const translations = {"ar":"المشكلات فقط","bn":"Issues only","de":"Issues only","en":"Issues only","es":"Issues only","fr":"Issues only","hi":"Issues only","id":"Issues only","pt-BR":"Issues only","ru":"Issues only","ur":"Issues only","zh-CN":"Issues only"};

export function admin_operations_issuesonly(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
