import { getLocale } from '../runtime.js';

const translations = {"ar":"ملغى","bn":"প্রত্যাহার করা হয়েছে","de":"Widerrufen","en":"Revoked","es":"Revocado","fr":"Révoqué","hi":"निरस्त किया गया","id":"Dicabut","pt-BR":"Revogado","ru":"Отозван","ur":"منسوخ کر دیا گیا۔","zh-CN":"已撤销"};

export function settings_apikeys_revoked(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
