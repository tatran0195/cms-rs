import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر تشغيل مكتمل","bn":"Last completed run","de":"Last completed run","en":"Last completed run","es":"Last completed run","fr":"Last completed run","hi":"Last completed run","id":"Last completed run","pt-BR":"Last completed run","ru":"Last completed run","ur":"Last completed run","zh-CN":"Last completed run"};

export function settings_search_diagnostics_lastrun(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
