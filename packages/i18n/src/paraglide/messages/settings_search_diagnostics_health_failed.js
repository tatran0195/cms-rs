import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل","bn":"Failed","de":"Failed","en":"Failed","es":"Failed","fr":"Failed","hi":"Failed","id":"Failed","pt-BR":"Failed","ru":"Failed","ur":"Failed","zh-CN":"Failed"};

export function settings_search_diagnostics_health_failed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
