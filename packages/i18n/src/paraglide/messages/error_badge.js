import { getLocale } from '../runtime.js';

const translations = {"ar":"خطأ","bn":"ত্রুটি","de":"Fehler","en":"Error","es":"error","fr":"Erreur","hi":"त्रुटि","id":"Kesalahan","pt-BR":"Erro","ru":"Ошибка","ur":"خرابی","zh-CN":"错误"};

export function error_badge(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
