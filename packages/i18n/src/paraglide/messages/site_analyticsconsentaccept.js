import { getLocale } from '../runtime.js';

const translations = {"ar":"قبول التحليلات","bn":"গ্রহণ করুন","de":"Akzeptiere","en":"Accept analytics","es":"Aceptar","fr":"Accepter","hi":"स्वीकार करो","id":"Terima","pt-BR":"Aceitar","ru":"Принять","ur":"قبول کریں۔","zh-CN":"接受"};

export function site_analyticsconsentaccept(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
