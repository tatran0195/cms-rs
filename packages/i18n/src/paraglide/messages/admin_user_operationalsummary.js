import { getLocale } from '../runtime.js';

const translations = {"ar":"الملخص التشغيلي","bn":"Operational Summary","de":"Operational Summary","en":"Operational Summary","es":"Operational Summary","fr":"Operational Summary","hi":"Operational Summary","id":"Operational Summary","pt-BR":"Operational Summary","ru":"Operational Summary","ur":"Operational Summary","zh-CN":"Operational Summary"};

export function admin_user_operationalsummary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
