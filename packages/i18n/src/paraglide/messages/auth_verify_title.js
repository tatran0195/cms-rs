import { getLocale } from '../runtime.js';

const translations = {"ar":"تحقّق من بريدك الإلكتروني","bn":"আপনার ইমেল যাচাই করুন","de":"Bestätigen Sie Ihre E-Mail","en":"Verify your email","es":"Verifica tu correo electrónico","fr":"Vérifiez votre email","hi":"अपना ईमेल सत्यापित करें","id":"Verifikasi email Anda","pt-BR":"Verifique seu e-mail","ru":"Подтвердите свой адрес электронной почты","ur":"اپنے ای میل کی تصدیق کریں۔","zh-CN":"验证您的电子邮件"};

export function auth_verify_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
