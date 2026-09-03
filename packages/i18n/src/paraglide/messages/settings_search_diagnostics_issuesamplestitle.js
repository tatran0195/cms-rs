import { getLocale } from '../runtime.js';

const translations = {"ar":"عينة محدودة من المشكلات","bn":"Bounded issue sample","de":"Bounded issue sample","en":"Bounded issue sample","es":"Bounded issue sample","fr":"Bounded issue sample","hi":"Bounded issue sample","id":"Bounded issue sample","pt-BR":"Bounded issue sample","ru":"Bounded issue sample","ur":"Bounded issue sample","zh-CN":"Bounded issue sample"};

export function settings_search_diagnostics_issuesamplestitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
