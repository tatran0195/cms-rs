import { getLocale } from '../runtime.js';

const translations = {"ar":"التشخيص غير متاح","bn":"Diagnostics unavailable","de":"Diagnostics unavailable","en":"Diagnostics unavailable","es":"Diagnostics unavailable","fr":"Diagnostics unavailable","hi":"Diagnostics unavailable","id":"Diagnostics unavailable","pt-BR":"Diagnostics unavailable","ru":"Diagnostics unavailable","ur":"Diagnostics unavailable","zh-CN":"Diagnostics unavailable"};

export function settings_search_diagnostics_errortitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
