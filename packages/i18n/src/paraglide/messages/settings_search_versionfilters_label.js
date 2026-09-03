import { getLocale } from '../runtime.js';

const translations = {"ar":"مرشح الإصدار","bn":"Version filter","de":"Version filter","en":"Version filter","es":"Version filter","fr":"Version filter","hi":"Version filter","id":"Version filter","pt-BR":"Version filter","ru":"Version filter","ur":"Version filter","zh-CN":"Version filter"};

export function settings_search_versionfilters_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
