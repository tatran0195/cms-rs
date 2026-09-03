import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء حساب","bn":"একটি অ্যাকাউন্ট তৈরি করুন","de":"Erstellen Sie ein Konto","en":"Create an account","es":"Crea una cuenta","fr":"Créer un compte","hi":"एक खाता बनाएं","id":"Buat akun","pt-BR":"Crie uma conta","ru":"Создать учетную запись","ur":"ایک اکاؤنٹ بنائیں","zh-CN":"创建帐户"};

export function auth_invite_createaccount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
