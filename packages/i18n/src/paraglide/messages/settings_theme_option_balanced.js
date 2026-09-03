import { getLocale } from '../runtime.js';

const translations = {"ar":"متوازن","bn":"Balanced","de":"Balanced","en":"Balanced","es":"Balanced","fr":"Balanced","hi":"Balanced","id":"Balanced","pt-BR":"Balanced","ru":"Balanced","ur":"Balanced","zh-CN":"Balanced"};

export function settings_theme_option_balanced(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
