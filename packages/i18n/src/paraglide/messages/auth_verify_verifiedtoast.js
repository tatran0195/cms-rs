import { getLocale } from '../runtime.js';

const translations = {"ar":"تم التحقق من البريد الإلكتروني","bn":"ইমেল যাচাই করা হয়েছে","de":"E-Mail bestätigt","en":"Email verified","es":"Correo electrónico verificado","fr":"E-mail vérifié","hi":"ईमेल सत्यापित","id":"Email terverifikasi","pt-BR":"E-mail verificado","ru":"Адрес электронной почты подтвержден","ur":"ای میل کی تصدیق ہو گئی۔","zh-CN":"电子邮件已验证"};

export function auth_verify_verifiedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
