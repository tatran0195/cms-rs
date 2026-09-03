import { getLocale } from '../runtime.js';

const translations = {"ar":"ناعم","bn":"Soft","de":"Soft","en":"Soft","es":"Soft","fr":"Soft","hi":"Soft","id":"Soft","pt-BR":"Soft","ru":"Soft","ur":"Soft","zh-CN":"Soft"};

export function settings_theme_option_soft(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
