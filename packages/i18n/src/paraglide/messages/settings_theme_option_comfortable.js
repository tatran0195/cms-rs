import { getLocale } from '../runtime.js';

const translations = {"ar":"مريح","bn":"Comfortable","de":"Comfortable","en":"Comfortable","es":"Comfortable","fr":"Comfortable","hi":"Comfortable","id":"Comfortable","pt-BR":"Comfortable","ru":"Comfortable","ur":"Comfortable","zh-CN":"Comfortable"};

export function settings_theme_option_comfortable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
