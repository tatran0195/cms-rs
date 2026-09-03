import { getLocale } from '../runtime.js';

const translations = {"ar":"المخطط","bn":"Schema","de":"Schema","en":"Schema","es":"Schema","fr":"Schema","hi":"Schema","id":"Schema","pt-BR":"Schema","ru":"Schema","ur":"Schema","zh-CN":"Schema"};

export function settings_search_diagnostics_schema(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
