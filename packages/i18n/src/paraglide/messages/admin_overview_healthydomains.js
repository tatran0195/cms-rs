import { getLocale } from '../runtime.js';

const translations = {"ar":"سليم النطاقات","bn":"Healthy Domains","de":"Healthy Domains","en":"Healthy Domains","es":"Healthy Domains","fr":"Healthy Domains","hi":"Healthy Domains","id":"Healthy Domains","pt-BR":"Healthy Domains","ru":"Healthy Domains","ur":"Healthy Domains","zh-CN":"Healthy Domains"};

export function admin_overview_healthydomains(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
