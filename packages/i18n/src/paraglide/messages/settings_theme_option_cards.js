import { getLocale } from '../runtime.js';

const translations = {"ar":"صفوف بطاقات","bn":"Card rows","de":"Card rows","en":"Card rows","es":"Card rows","fr":"Card rows","hi":"Card rows","id":"Card rows","pt-BR":"Card rows","ru":"Card rows","ur":"Card rows","zh-CN":"Card rows"};

export function settings_theme_option_cards(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
