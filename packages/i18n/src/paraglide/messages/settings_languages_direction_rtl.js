import { getLocale } from '../runtime.js';

const translations = {"ar":"RTL","bn":"RTL","de":"RTL","en":"RTL","es":"RTL","fr":"RTL","hi":"RTL","id":"RTL","pt-BR":"RTL","ru":"RTL","ur":"RTL","zh-CN":"RTL"};

export function settings_languages_direction_rtl(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
