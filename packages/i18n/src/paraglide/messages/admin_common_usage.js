import { getLocale } from '../runtime.js';

const translations = {"ar":"الاستخدام","bn":"Usage","de":"Usage","en":"Usage","es":"Usage","fr":"Usage","hi":"Usage","id":"Usage","pt-BR":"Usage","ru":"Usage","ur":"Usage","zh-CN":"Usage"};

export function admin_common_usage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
