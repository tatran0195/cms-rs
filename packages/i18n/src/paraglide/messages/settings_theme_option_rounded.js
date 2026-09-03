import { getLocale } from '../runtime.js';

const translations = {"ar":"مستدير","bn":"Rounded","de":"Rounded","en":"Rounded","es":"Rounded","fr":"Rounded","hi":"Rounded","id":"Rounded","pt-BR":"Rounded","ru":"Rounded","ur":"Rounded","zh-CN":"Rounded"};

export function settings_theme_option_rounded(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
