import { getLocale } from '../runtime.js';

const translations = {"ar":"الخطر","bn":"বিপদ","de":"Gefahr","en":"Danger","es":"Peligro","fr":"Danger","hi":"ख़तरा","id":"Bahaya","pt-BR":"Perigo","ru":"Опасность","ur":"خطرہ","zh-CN":"危险"};

export function settings_theme_color_danger(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
