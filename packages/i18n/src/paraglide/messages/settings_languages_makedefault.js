import { getLocale } from '../runtime.js';

const translations = {"ar":"تعيين كافتراضية","bn":"ডিফল্ট করুন","de":"Als Standard festlegen","en":"Make default","es":"Hacer predeterminado","fr":"Par défaut","hi":"डिफ़ॉल्ट बनाएं","id":"Jadikan default","pt-BR":"Tornar padrão","ru":"Сделать по умолчанию","ur":"پہلے سے طے شدہ بنائیں","zh-CN":"设为默认"};

export function settings_languages_makedefault(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
