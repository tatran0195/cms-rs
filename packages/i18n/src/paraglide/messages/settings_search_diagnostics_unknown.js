import { getLocale } from '../runtime.js';

const translations = {"ar":"غير معروف","bn":"Unknown","de":"Unknown","en":"Unknown","es":"Unknown","fr":"Unknown","hi":"Unknown","id":"Unknown","pt-BR":"Unknown","ru":"Unknown","ur":"Unknown","zh-CN":"Unknown"};

export function settings_search_diagnostics_unknown(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
