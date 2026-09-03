import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء حساب باستخدام Google","bn":"Google দিয়ে অ্যাকাউন্ট তৈরি করুন","de":"Konto mit Google erstellen","en":"Create account with Google","es":"Crear cuenta con Google","fr":"Créer un compte avec Google","hi":"Google के साथ खाता बनाएं","id":"Buat akun dengan Google","pt-BR":"Crie uma conta com Google","ru":"Создать учетную запись с помощью Google","ur":"Google کے ساتھ اکاؤنٹ بنائیں","zh-CN":"使用 Google 创建帐户"};

export function auth_google_signup(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
