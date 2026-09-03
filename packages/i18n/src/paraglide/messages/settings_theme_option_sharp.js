import { getLocale } from '../runtime.js';

const translations = {"ar":"حاد","bn":"Sharp","de":"Sharp","en":"Sharp","es":"Sharp","fr":"Sharp","hi":"Sharp","id":"Sharp","pt-BR":"Sharp","ru":"Sharp","ur":"Sharp","zh-CN":"Sharp"};

export function settings_theme_option_sharp(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
