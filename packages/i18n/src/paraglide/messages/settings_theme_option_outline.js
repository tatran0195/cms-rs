import { getLocale } from '../runtime.js';

const translations = {"ar":"مخطط","bn":"Outline","de":"Outline","en":"Outline","es":"Outline","fr":"Outline","hi":"Outline","id":"Outline","pt-BR":"Outline","ru":"Outline","ur":"Outline","zh-CN":"Outline"};

export function settings_theme_option_outline(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
