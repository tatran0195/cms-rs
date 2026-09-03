import { getLocale } from '../runtime.js';

const translations = {"ar":"تم نسخ مفتاح API","bn":"API কী অনুলিপি করা হয়েছে","de":"API Schlüssel kopiert","en":"API key copied","es":"API clave copiada","fr":"Clé API copiée","hi":"API कुंजी की प्रतिलिपि बनाई गई","id":"Kunci API disalin","pt-BR":"Chave API copiada","ru":"Ключ API скопирован","ur":"API کلید کاپی ہو گئی۔","zh-CN":"API 密钥已复制"};

export function settings_apikeys_copied(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
