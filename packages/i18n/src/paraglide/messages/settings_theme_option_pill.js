import { getLocale } from '../runtime.js';

const translations = {"ar":"كبسولة","bn":"Pill","de":"Pill","en":"Pill","es":"Pill","fr":"Pill","hi":"Pill","id":"Pill","pt-BR":"Pill","ru":"Pill","ur":"Pill","zh-CN":"Pill"};

export function settings_theme_option_pill(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
