import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إنشاء المفتاح","bn":"কী তৈরি করা হয়েছে","de":"Schlüssel erstellt","en":"Key created","es":"Clave creada","fr":"Clé créée","hi":"कुंजी बनाई गई","id":"Kunci dibuat","pt-BR":"Chave criada","ru":"Ключ создан","ur":"کلید بنائی گئی۔","zh-CN":"已创建密钥"};

export function settings_apikeys_created_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
