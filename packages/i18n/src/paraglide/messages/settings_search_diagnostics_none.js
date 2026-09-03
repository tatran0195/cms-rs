import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يوجد","bn":"None","de":"None","en":"None","es":"None","fr":"None","hi":"None","id":"None","pt-BR":"None","ru":"None","ur":"None","zh-CN":"None"};

export function settings_search_diagnostics_none(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
