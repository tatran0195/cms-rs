import { getLocale } from '../runtime.js';

const translations = {"ar":"مسطح","bn":"Flat","de":"Flat","en":"Flat","es":"Flat","fr":"Flat","hi":"Flat","id":"Flat","pt-BR":"Flat","ru":"Flat","ur":"Flat","zh-CN":"Flat"};

export function settings_theme_option_flat(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
