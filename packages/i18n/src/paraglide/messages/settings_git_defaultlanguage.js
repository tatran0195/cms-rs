import { getLocale } from '../runtime.js';

const translations = {"ar":"اللغة الافتراضية","bn":"ডিফল্ট ভাষা","de":"Standardsprache","en":"Default language","es":"Idioma predeterminado","fr":"Langue par défaut","hi":"डिफ़ॉल्ट भाषा","id":"Bahasa bawaan","pt-BR":"Idioma padrão","ru":"Язык по умолчанию","ur":"پہلے سے طے شدہ زبان","zh-CN":"默认语言"};

export function settings_git_defaultlanguage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
