import { getLocale } from '../runtime.js';

const translations = {"ar":"عادي","bn":"স্বাভাবিক","de":"Normal","en":"Normal","es":"normales","fr":"Normale","hi":"सामान्य","id":"Biasa","pt-BR":"Normais","ru":"Нормальный","ur":"نارمل","zh-CN":"正常"};

export function settings_typography_flow_normal(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
