import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض العمليات","bn":"View Operations","de":"View Operations","en":"View Operations","es":"View Operations","fr":"View Operations","hi":"View Operations","id":"View Operations","pt-BR":"View Operations","ru":"View Operations","ur":"View Operations","zh-CN":"View Operations"};

export function admin_site_viewoperations(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
