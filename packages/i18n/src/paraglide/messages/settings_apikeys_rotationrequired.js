import { getLocale } from '../runtime.js';

const translations = {"ar":"يلزم التدوير","bn":"রোটেশন প্রয়োজন","de":"Rotation erforderlich","en":"Rotation required","es":"Requiere rotación","fr":"Renouvellement requis","hi":"रोटेशन आवश्यक","id":"Rotasi diperlukan","pt-BR":"Rotação obrigatória","ru":"Требуется смена","ur":"تبدیلی درکار","zh-CN":"需要轮换"};

export function settings_apikeys_rotationrequired(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
