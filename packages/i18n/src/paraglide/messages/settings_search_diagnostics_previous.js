import { getLocale } from '../runtime.js';

const translations = {"ar":"السابق","bn":"Previous","de":"Previous","en":"Previous","es":"Previous","fr":"Previous","hi":"Previous","id":"Previous","pt-BR":"Previous","ru":"Previous","ur":"Previous","zh-CN":"Previous"};

export function settings_search_diagnostics_previous(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
