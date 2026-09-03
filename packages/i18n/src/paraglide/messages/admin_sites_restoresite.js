import { getLocale } from '../runtime.js';

const translations = {"ar":"استعادة الموقع","bn":"Restore site","de":"Restore site","en":"Restore site","es":"Restore site","fr":"Restore site","hi":"Restore site","id":"Restore site","pt-BR":"Restore site","ru":"Restore site","ur":"Restore site","zh-CN":"Restore site"};

export function admin_sites_restoresite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
