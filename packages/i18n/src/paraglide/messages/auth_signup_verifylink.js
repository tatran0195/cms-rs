import { getLocale } from '../runtime.js';

const translations = {"ar":"للتحقق من بريدك الإلكتروني","bn":"আপনার ইমেল যাচাই করুন","de":"Bestätigen Sie Ihre E-Mail-Adresse","en":"verify your email","es":"verifica tu correo electrónico","fr":"vérifiez votre email","hi":"अपना ईमेल सत्यापित करें","id":"verifikasi email Anda","pt-BR":"verifique seu e-mail","ru":"подтвердите свою электронную почту","ur":"اپنے ای میل کی تصدیق کریں۔","zh-CN":"验证您的电子邮件"};

export function auth_signup_verifylink(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
