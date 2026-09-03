import { getLocale } from '../runtime.js';

const translations = {"ar":"تم التحقق من بريدك الإلكتروني. جارٍ إعادة التوجيه…","bn":"আপনার ইমেল যাচাই করা হয়েছে. পুনঃনির্দেশ করা হচ্ছে...","de":"Ihre E-Mail-Adresse ist bestätigt. Weiterleitung…","en":"Your email is verified. Redirecting…","es":"Su correo electrónico está verificado. Redirigiendo…","fr":"Votre email est vérifié. Redirection…","hi":"आपका ईमेल सत्यापित है. पुनर्निर्देशन...","id":"Email Anda telah diverifikasi. Mengarahkan…","pt-BR":"Seu e-mail foi verificado. Redirecionando…","ru":"Ваш адрес электронной почты подтвержден. Перенаправление…","ur":"آپ کا ای میل تصدیق شدہ ہے۔ ری ڈائریکٹ ہو رہا ہے…","zh-CN":"您的电子邮件已验证。正在重定向..."};

export function auth_verify_verified(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
