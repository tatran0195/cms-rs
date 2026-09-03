import { getLocale } from '../runtime.js';

const translations = {"ar":"تدوير","bn":"রোটেট করুন","de":"Rotieren","en":"Rotate","es":"Rotar","fr":"Renouveler","hi":"रोटेट करें","id":"Rotasi","pt-BR":"Rotacionar","ru":"Сменить","ur":"تبدیل کریں","zh-CN":"轮换"};

export function settings_apikeys_rotate(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
