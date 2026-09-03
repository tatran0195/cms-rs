import { getLocale } from '../runtime.js';

const translations = {"ar":"فتح العمليات","bn":"Open operations","de":"Open operations","en":"Open operations","es":"Open operations","fr":"Open operations","hi":"Open operations","id":"Open operations","pt-BR":"Open operations","ru":"Open operations","ur":"Open operations","zh-CN":"Open operations"};

export function admin_overview_openoperations(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
