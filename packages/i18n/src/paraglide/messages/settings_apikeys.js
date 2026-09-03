import { getLocale } from '../runtime.js';

const translations = {"ar":"مفاتيح API","bn":"API কী","de":"API Schlüssel","en":"API keys","es":"API claves","fr":"Clés API","hi":"API कुंजियाँ","id":"API kunci","pt-BR":"API chaves","ru":"API ключей","ur":"API کلیدیں۔","zh-CN":"API 键"};

export function settings_apikeys(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
