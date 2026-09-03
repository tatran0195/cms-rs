import { getLocale } from '../runtime.js';

const translations = {"ar":"التالي","bn":"Next","de":"Next","en":"Next","es":"Next","fr":"Next","hi":"Next","id":"Next","pt-BR":"Next","ru":"Next","ur":"Next","zh-CN":"Next"};

export function settings_search_diagnostics_next(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
