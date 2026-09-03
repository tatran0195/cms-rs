import { getLocale } from '../runtime.js';

const translations = {"ar":"الخطوة التالية","bn":"Next step","de":"Next step","en":"Next step","es":"Next step","fr":"Next step","hi":"Next step","id":"Next step","pt-BR":"Next step","ru":"Next step","ur":"Next step","zh-CN":"Next step"};

export function settings_theme_preview_next(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
