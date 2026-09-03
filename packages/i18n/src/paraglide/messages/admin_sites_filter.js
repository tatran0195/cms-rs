import { getLocale } from '../runtime.js';

const translations = {"ar":"تصفية","bn":"Filter","de":"Filter","en":"Filter","es":"Filter","fr":"Filter","hi":"Filter","id":"Filter","pt-BR":"Filter","ru":"Filter","ur":"Filter","zh-CN":"Filter"};

export function admin_sites_filter(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
