import { getLocale } from '../runtime.js';

const translations = {"ar":"خط سفلي","bn":"Underline","de":"Underline","en":"Underline","es":"Underline","fr":"Underline","hi":"Underline","id":"Underline","pt-BR":"Underline","ru":"Underline","ur":"Underline","zh-CN":"Underline"};

export function settings_theme_option_underline(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
