import { getLocale } from '../runtime.js';

const translations = {"ar":"مكتبة مرجعية","bn":"Reference library","de":"Reference library","en":"Reference library","es":"Reference library","fr":"Reference library","hi":"Reference library","id":"Reference library","pt-BR":"Reference library","ru":"Reference library","ur":"Reference library","zh-CN":"Reference library"};

export function settings_theme_option_reference(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
