import { getLocale } from '../runtime.js';

const translations = {"ar":"رفض","bn":"প্রত্যাখ্যান","de":"Ablehnen","en":"Decline","es":"Rechazar","fr":"Refuser","hi":"अस्वीकार","id":"Tolak","pt-BR":"Recusar","ru":"Отклонить","ur":"مسترد کریں","zh-CN":"拒绝"};

export function site_analyticsconsentdecline(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
