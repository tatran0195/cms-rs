import { getLocale } from '../runtime.js';

const translations = {"ar":"المصدر","bn":"উৎস","de":"Quelle","en":"Source","es":"Fuente","fr":"Source","hi":"स्रोत","id":"Sumber","pt-BR":"Fonte","ru":"Источник","ur":"ماخذ","zh-CN":"来源"};

export function settings_import_summary_source(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
