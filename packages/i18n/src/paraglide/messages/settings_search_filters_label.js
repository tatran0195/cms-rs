import { getLocale } from '../runtime.js';

const translations = {"ar":"مرشح اللغة","bn":"Language filter","de":"Language filter","en":"Language filter","es":"Language filter","fr":"Language filter","hi":"Language filter","id":"Language filter","pt-BR":"Language filter","ru":"Language filter","ur":"Language filter","zh-CN":"Language filter"};

export function settings_search_filters_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
