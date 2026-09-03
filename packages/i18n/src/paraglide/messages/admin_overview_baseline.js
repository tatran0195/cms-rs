import { getLocale } from '../runtime.js';

const translations = {"ar":"خط الأساس","bn":"Baseline","de":"Baseline","en":"Baseline","es":"Baseline","fr":"Baseline","hi":"Baseline","id":"Baseline","pt-BR":"Baseline","ru":"Baseline","ur":"Baseline","zh-CN":"Baseline"};

export function admin_overview_baseline(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
