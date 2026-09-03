import { getLocale } from '../runtime.js';

const translations = {"ar":"جاهز","bn":"Ready","de":"Ready","en":"Ready","es":"Ready","fr":"Ready","hi":"Ready","id":"Ready","pt-BR":"Ready","ru":"Ready","ur":"Ready","zh-CN":"Ready"};

export function settings_search_diagnostics_health_ready(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
