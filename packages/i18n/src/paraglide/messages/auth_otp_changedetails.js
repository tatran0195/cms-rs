import { getLocale } from '../runtime.js';

const translations = {"ar":"تغيير الاسم أو البريد","bn":"নাম বা ইমেল পরিবর্তন করুন","de":"Namen oder E-Mail ändern","en":"Change name or email","es":"Cambiar nombre o correo electrónico","fr":"Changer de nom ou d'e-mail","hi":"नाम या ईमेल बदलें","id":"Ganti nama atau email","pt-BR":"Alterar nome ou e-mail","ru":"Изменить имя или адрес электронной почты","ur":"نام یا ای میل تبدیل کریں۔","zh-CN":"更改姓名或电子邮件"};

export function auth_otp_changedetails(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
