import { getLocale } from '../runtime.js';

const translations = {"ar":"عينة بيانات وصفية مفهرسة","bn":"Indexed metadata sample","de":"Indexed metadata sample","en":"Indexed metadata sample","es":"Indexed metadata sample","fr":"Indexed metadata sample","hi":"Indexed metadata sample","id":"Indexed metadata sample","pt-BR":"Indexed metadata sample","ru":"Indexed metadata sample","ur":"Indexed metadata sample","zh-CN":"Indexed metadata sample"};

export function settings_search_diagnostics_samplestitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
