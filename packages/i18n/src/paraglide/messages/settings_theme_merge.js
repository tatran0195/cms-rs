import { getLocale } from '../runtime.js';

const translations = {"ar":"دمج","bn":"একত্রিত করুন","de":"Zusammenführen","en":"Merge","es":"Fusionar","fr":"Fusionner","hi":"विलय","id":"Gabungkan","pt-BR":"Mesclar","ru":"Объединить","ur":"ضم کرنا","zh-CN":"合并"};

export function settings_theme_merge(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
