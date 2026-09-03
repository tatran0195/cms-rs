import { getLocale } from '../runtime.js';

const translations = {"ar":"السبب","bn":"Reason","de":"Reason","en":"Reason","es":"Reason","fr":"Reason","hi":"Reason","id":"Reason","pt-BR":"Reason","ru":"Reason","ur":"Reason","zh-CN":"Reason"};

export function admin_sites_reason(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
