import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء الإصدار","bn":"সংস্করণ তৈরি করুন","de":"Version erstellen","en":"Create version","es":"Crear versión","fr":"Créer une version","hi":"संस्करण बनाएँ","id":"Buat versi","pt-BR":"Criar versão","ru":"Создать версию","ur":"ورژن بنائیں","zh-CN":"创建版本"};

export function editor_branch_create(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
