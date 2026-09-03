import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء مفتاح","bn":"কী তৈরি করুন","de":"Schlüssel erstellen","en":"Create key","es":"Crear clave","fr":"Créer une clé","hi":"कुंजी बनाएं","id":"Buat kunci","pt-BR":"Criar chave","ru":"Создать ключ","ur":"کلید بنائیں","zh-CN":"创建密钥"};

export function settings_apikeys_create(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
