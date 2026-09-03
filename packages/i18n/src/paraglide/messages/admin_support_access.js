import { getLocale } from '../runtime.js';

const translations = {"ar":"الوصول","bn":"Access","de":"Access","en":"Access","es":"Access","fr":"Access","hi":"Access","id":"Access","pt-BR":"Access","ru":"Access","ur":"Access","zh-CN":"Access"};

export function admin_support_access(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
