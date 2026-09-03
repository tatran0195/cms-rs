import { getLocale } from '../runtime.js';

const translations = {"ar":"لا تتوفر بيانات وصفية مفهرسة لهذه الصفحة.","bn":"No indexed metadata is available for this page.","de":"No indexed metadata is available for this page.","en":"No indexed metadata is available for this page.","es":"No indexed metadata is available for this page.","fr":"No indexed metadata is available for this page.","hi":"No indexed metadata is available for this page.","id":"No indexed metadata is available for this page.","pt-BR":"No indexed metadata is available for this page.","ru":"No indexed metadata is available for this page.","ur":"No indexed metadata is available for this page.","zh-CN":"No indexed metadata is available for this page."};

export function settings_search_diagnostics_nosamples(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
