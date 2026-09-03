import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إنشاء مفتاح API","bn":"API কী তৈরি করা হয়েছে","de":"API Schlüssel erstellt","en":"API key created","es":"API clave creada","fr":"Clé API créée","hi":"API कुंजी बनाई गई","id":"Kunci API dibuat","pt-BR":"API chave criada","ru":"Ключ API создан","ur":"API کلید بنائی گئی۔","zh-CN":"API 密钥已创建"};

export function settings_apikeys_created_toast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
