import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء جمهور","bn":"দর্শক তৈরি করুন","de":"Publikum erstellen","en":"Create audience","es":"Crear audiencia","fr":"Créer une audience","hi":"दर्शक बनाएँ","id":"Buat audiens","pt-BR":"Criar público","ru":"Создать аудиторию","ur":"سامعین بنائیں","zh-CN":"创建受众"};

export function settings_authentication_reader_createaudience(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
