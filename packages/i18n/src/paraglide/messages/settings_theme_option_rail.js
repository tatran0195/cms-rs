import { getLocale } from '../runtime.js';

const translations = {"ar":"شريط","bn":"Rail","de":"Rail","en":"Rail","es":"Rail","fr":"Rail","hi":"Rail","id":"Rail","pt-BR":"Rail","ru":"Rail","ur":"Rail","zh-CN":"Rail"};

export function settings_theme_option_rail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
