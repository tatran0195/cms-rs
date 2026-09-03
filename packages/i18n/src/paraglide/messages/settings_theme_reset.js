import { getLocale } from '../runtime.js';

const translations = {"ar":"إعادة ضبط الإعداد الجاهز","bn":"প্রিসেট রিসেট করুন","de":"Voreinstellung zurücksetzen","en":"Reset preset","es":"Restablecer preajuste","fr":"Réinitialiser le préréglage","hi":"प्रीसेट रीसेट करें","id":"Setel ulang prasetel","pt-BR":"Redefinir predefinição","ru":"Сбросить настройки","ur":"پیش سیٹ کو دوبارہ ترتیب دیں۔","zh-CN":"重置预设"};

export function settings_theme_reset(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
