import { getLocale } from '../runtime.js';

const translations = {"ar":"عائم","bn":"Floating","de":"Floating","en":"Floating","es":"Floating","fr":"Floating","hi":"Floating","id":"Floating","pt-BR":"Floating","ru":"Floating","ur":"Floating","zh-CN":"Floating"};

export function settings_theme_option_floating(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
