import { getLocale } from '../runtime.js';

const translations = {"ar":"يتوسطه خط","bn":"স্ট্রাইকথ্রু","de":"Durchgestrichen","en":"Strikethrough","es":"Tachado","fr":"Barré","hi":"स्ट्राइकथ्रू","id":"Dicoret","pt-BR":"Tachado","ru":"Зачеркивание","ur":"سٹرائیک تھرو","zh-CN":"删除线"};

export function editor_format_strikethrough(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
