import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر استخدام:","bn":"সর্বশেষ ব্যবহার:","de":"Zuletzt verwendet:","en":"Last used:","es":"Último uso:","fr":"Dernière utilisation :","hi":"अंतिम उपयोग:","id":"Terakhir digunakan:","pt-BR":"Último uso:","ru":"Последнее использование:","ur":"آخری استعمال:","zh-CN":"上次使用："};

export function settings_apikeys_lastused(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
