import { getLocale } from '../runtime.js';

const translations = {"ar":"الاستخدام","bn":"ব্যবহার","de":"Nutzung","en":"Usage","es":"Uso","fr":"Utilisation","hi":"उपयोग","id":"Penggunaan","pt-BR":"Uso","ru":"Использование","ur":"استعمال","zh-CN":"用途"};

export function settings_usage_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
