import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إلغاء مفتاح API","bn":"API কী প্রত্যাহার করা হয়েছে৷","de":"API Schlüssel widerrufen","en":"API key revoked","es":"API clave revocada","fr":"Clé API révoquée","hi":"API कुंजी निरस्त कर दी गई","id":"Kunci API dicabut","pt-BR":"Chave API revogada","ru":"Ключ API отозван","ur":"API کلید منسوخ کر دی گئی۔","zh-CN":"API 密钥已撤销"};

export function settings_apikeys_revokedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
