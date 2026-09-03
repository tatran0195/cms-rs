import { getLocale } from '../runtime.js';

const translations = {"ar":"السطح","bn":"সারফেস","de":"Oberfläche","en":"Surface","es":"Superficie","fr":"Surface","hi":"सतह","id":"Permukaan","pt-BR":"Superfície","ru":"Поверхность","ur":"سطح","zh-CN":"表面"};

export function settings_theme_color_surface(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
