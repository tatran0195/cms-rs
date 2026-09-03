import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يوجد عميل مؤهل للوصول","bn":"No eligible customer has access","de":"No eligible customer has access","en":"No eligible customer has access","es":"No eligible customer has access","fr":"No eligible customer has access","hi":"No eligible customer has access","id":"No eligible customer has access","pt-BR":"No eligible customer has access","ru":"No eligible customer has access","ur":"No eligible customer has access","zh-CN":"No eligible customer has access"};

export function admin_support_noeligible(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
