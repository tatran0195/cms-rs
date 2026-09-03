import { getLocale } from '../runtime.js';

const translations = {"ar":"صفوف مفتوحة","bn":"Open rows","de":"Open rows","en":"Open rows","es":"Open rows","fr":"Open rows","hi":"Open rows","id":"Open rows","pt-BR":"Open rows","ru":"Open rows","ur":"Open rows","zh-CN":"Open rows"};

export function settings_theme_option_rows(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
