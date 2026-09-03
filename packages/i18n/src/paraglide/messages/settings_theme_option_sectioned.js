import { getLocale } from '../runtime.js';

const translations = {"ar":"مقسّم","bn":"Sectioned","de":"Sectioned","en":"Sectioned","es":"Sectioned","fr":"Sectioned","hi":"Sectioned","id":"Sectioned","pt-BR":"Sectioned","ru":"Sectioned","ur":"Sectioned","zh-CN":"Sectioned"};

export function settings_theme_option_sectioned(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
