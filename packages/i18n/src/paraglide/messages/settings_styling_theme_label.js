import { getLocale } from '../runtime.js';

const translations = {"ar":"السمة الافتراضية","bn":"ডিফল্ট থিম","de":"Standardthema","en":"Default theme","es":"Tema predeterminado","fr":"Thème par défaut","hi":"डिफ़ॉल्ट थीम","id":"Tema bawaan","pt-BR":"Tema padrão","ru":"Тема по умолчанию","ur":"پہلے سے طے شدہ تھیم","zh-CN":"默认主题"};

export function settings_styling_theme_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
