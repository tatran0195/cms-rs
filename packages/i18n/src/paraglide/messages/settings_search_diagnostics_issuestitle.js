import { getLocale } from '../runtime.js';

const translations = {"ar":"مشكلات الفهرس","bn":"Index issues","de":"Index issues","en":"Index issues","es":"Index issues","fr":"Index issues","hi":"Index issues","id":"Index issues","pt-BR":"Index issues","ru":"Index issues","ur":"Index issues","zh-CN":"Index issues"};

export function settings_search_diagnostics_issuestitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
