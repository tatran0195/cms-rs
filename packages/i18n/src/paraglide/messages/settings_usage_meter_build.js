import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات البناء","bn":"Builds","de":"Builds","en":"Builds","es":"Builds","fr":"Builds","hi":"Builds","id":"Builds","pt-BR":"Builds","ru":"Builds","ur":"Builds","zh-CN":"Builds"};

export function settings_usage_meter_build(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
