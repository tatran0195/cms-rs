import { getLocale } from '../runtime.js';

const translations = {"ar":"مصمت","bn":"Solid","de":"Solid","en":"Solid","es":"Solid","fr":"Solid","hi":"Solid","id":"Solid","pt-BR":"Solid","ru":"Solid","ur":"Solid","zh-CN":"Solid"};

export function settings_theme_option_solid(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
