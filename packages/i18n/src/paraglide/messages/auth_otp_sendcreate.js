import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء حساب","bn":"অ্যাকাউন্ট তৈরি করুন","de":"Konto erstellen","en":"Create account","es":"Crear cuenta","fr":"Créer un compte","hi":"खाता बनाएं","id":"Buat akun","pt-BR":"Criar conta","ru":"Создать учетную запись","ur":"اکاؤنٹ بنائیں","zh-CN":"创建帐户"};

export function auth_otp_sendcreate(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
