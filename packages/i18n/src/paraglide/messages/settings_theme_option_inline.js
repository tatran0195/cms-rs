import { getLocale } from '../runtime.js';

const translations = {"ar":"ضمن الصفحة","bn":"Inline","de":"Inline","en":"Inline","es":"Inline","fr":"Inline","hi":"Inline","id":"Inline","pt-BR":"Inline","ru":"Inline","ur":"Inline","zh-CN":"Inline"};

export function settings_theme_option_inline(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
