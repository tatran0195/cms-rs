import { getLocale } from '../runtime.js';

const translations = {"ar":"افتراضي","bn":"ডিফল্ট","de":"Standard","en":"Default","es":"Predeterminado","fr":"Par défaut","hi":"डिफ़ॉल्ट","id":"Bawaan","pt-BR":"Padrão","ru":"По умолчанию","ur":"طے شدہ","zh-CN":"默认"};

export function settings_typography_preset_default(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
