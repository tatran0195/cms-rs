import { getLocale } from '../runtime.js';

const translations = {"ar":"الافتراضي","bn":"ডিফল্ট","de":"Standard","en":"default","es":"predeterminado","fr":"par défaut","hi":"डिफ़ॉल्ट","id":"bawaan","pt-BR":"padrão","ru":"по умолчанию","ur":"پہلے سے طے شدہ","zh-CN":"默认"};

export function site_defaultvalue(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
