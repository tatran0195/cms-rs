import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ التحقق من بريدك الإلكتروني…","bn":"আপনার ইমেল যাচাই করা হচ্ছে...","de":"Ihre E-Mail-Adresse wird überprüft …","en":"Verifying your email…","es":"Verificando tu correo electrónico...","fr":"Vérification de votre e-mail…","hi":"आपका ईमेल सत्यापित किया जा रहा है...","id":"Memverifikasi email Anda…","pt-BR":"Verificando seu e-mail…","ru":"Проверка электронной почты…","ur":"آپ کی ای میل کی توثیق ہو رہی ہے…","zh-CN":"正在验证您的电子邮件..."};

export function auth_verify_verifying(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
