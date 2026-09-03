import { getLocale } from '../runtime.js';

const translations = {"ar":"البدء السريع","bn":"শুরু হচ্ছে","de":"Erste Schritte","en":"Getting started","es":"Empezando","fr":"Commencer","hi":"आरंभ करना","id":"Memulai","pt-BR":"Primeiros passos","ru":"Начало работы","ur":"شروع کرنا","zh-CN":"开始使用"};

export function settings_typography_preview_heading(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
