import { getLocale } from '../runtime.js';

const translations = {"ar":"خطر","bn":"বিপদ","de":"Gefahr","en":"Danger","es":"Peligro","fr":"Danger","hi":"ख़तरा","id":"Bahaya","pt-BR":"Perigo","ru":"Опасность","ur":"خطرہ","zh-CN":"危险"};

export function editor_slash_danger_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
