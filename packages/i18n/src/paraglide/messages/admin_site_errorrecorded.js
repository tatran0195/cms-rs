import { getLocale } from '../runtime.js';

const translations = {"ar":"سُجل خطأ","bn":"Error Recorded","de":"Error Recorded","en":"Error Recorded","es":"Error Recorded","fr":"Error Recorded","hi":"Error Recorded","id":"Error Recorded","pt-BR":"Error Recorded","ru":"Error Recorded","ur":"Error Recorded","zh-CN":"Error Recorded"};

export function admin_site_errorrecorded(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
