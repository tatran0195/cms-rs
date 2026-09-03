import { getLocale } from '../runtime.js';

const translations = {"ar":"التوزيع","bn":"Distribution","de":"Distribution","en":"Distribution","es":"Distribution","fr":"Distribution","hi":"Distribution","id":"Distribution","pt-BR":"Distribution","ru":"Distribution","ur":"Distribution","zh-CN":"Distribution"};

export function settings_search_diagnostics_distributiontitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
