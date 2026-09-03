import { getLocale } from '../runtime.js';

const translations = {"ar":"صحة الفهرس الحالي","bn":"Current index health","de":"Current index health","en":"Current index health","es":"Current index health","fr":"Current index health","hi":"Current index health","id":"Current index health","pt-BR":"Current index health","ru":"Current index health","ur":"Current index health","zh-CN":"Current index health"};

export function settings_search_diagnostics_healthlabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
