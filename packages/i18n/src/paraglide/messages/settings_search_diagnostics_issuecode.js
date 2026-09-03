import { getLocale } from '../runtime.js';

const translations = {"ar":"الرمز: {code}","bn":"Code: {code}","de":"Code: {code}","en":"Code: {code}","es":"Code: {code}","fr":"Code: {code}","hi":"Code: {code}","id":"Code: {code}","pt-BR":"Code: {code}","ru":"Code: {code}","ur":"Code: {code}","zh-CN":"Code: {code}"};

export function settings_search_diagnostics_issuecode(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
