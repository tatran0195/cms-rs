import { getLocale } from '../runtime.js';

const translations = {"ar":"صناديق","bn":"Boxed","de":"Boxed","en":"Boxed","es":"Boxed","fr":"Boxed","hi":"Boxed","id":"Boxed","pt-BR":"Boxed","ru":"Boxed","ur":"Boxed","zh-CN":"Boxed"};

export function settings_theme_option_boxed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
