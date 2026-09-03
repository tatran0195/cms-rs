import { getLocale } from '../runtime.js';

const translations = {"ar":"تأكيد البريد الإلكتروني","bn":"ইমেল যাচাই করুন","de":"E-Mail bestätigen","en":"Verify email","es":"Verificar correo electrónico","fr":"Vérifier l'e-mail","hi":"ईमेल सत्यापित करें","id":"Verifikasi email","pt-BR":"Verificar e-mail","ru":"Подтвердите адрес электронной почты","ur":"ای میل کی تصدیق کریں۔","zh-CN":"验证电子邮件"};

export function auth_verify_submit(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
