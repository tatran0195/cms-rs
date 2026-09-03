import { getLocale } from '../runtime.js';

const translations = {"ar":"بدء وصول الدعم","bn":"Start support access","de":"Start support access","en":"Start support access","es":"Start support access","fr":"Start support access","hi":"Start support access","id":"Start support access","pt-BR":"Start support access","ru":"Start support access","ur":"Start support access","zh-CN":"Start support access"};

export function admin_support_start(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
