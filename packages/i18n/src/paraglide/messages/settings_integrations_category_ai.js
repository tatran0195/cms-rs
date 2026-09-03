import { getLocale } from '../runtime.js';

const translations = {"ar":"الذكاء الاصطناعي","bn":"কৃত্রিম বুদ্ধিমত্তা","de":"KI","en":"AI","es":"IA","fr":"IA","hi":"एआई","id":"Kecerdasan buatan","pt-BR":"IA","ru":"ИИ","ur":"مصنوعی ذہانت","zh-CN":"人工智能"};

export function settings_integrations_category_ai(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
