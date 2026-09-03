import { getLocale } from '../runtime.js';

const translations = {"ar":"عريض","bn":"Wide","de":"Wide","en":"Wide","es":"Wide","fr":"Wide","hi":"Wide","id":"Wide","pt-BR":"Wide","ru":"Wide","ur":"Wide","zh-CN":"Wide"};

export function settings_theme_option_wide(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
