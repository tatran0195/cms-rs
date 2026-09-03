import { getLocale } from '../runtime.js';

const translations = {"ar":"تغيير البريد الإلكتروني","bn":"ইমেল পরিবর্তন করুন","de":"E-Mail ändern","en":"Change email","es":"Cambiar correo electrónico","fr":"Changer d'e-mail","hi":"ईमेल बदलें","id":"Ganti email","pt-BR":"Alterar e-mail","ru":"Изменить адрес электронной почты","ur":"ای میل تبدیل کریں۔","zh-CN":"更改电子邮件"};

export function settings_account_email_sendverification(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
