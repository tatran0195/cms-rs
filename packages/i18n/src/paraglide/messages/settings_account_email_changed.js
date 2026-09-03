import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تغيير البريد الإلكتروني","bn":"ইমেল ঠিকানা পরিবর্তন করা হয়েছে","de":"E-Mail-Adresse geändert","en":"Email address changed","es":"Dirección de correo electrónico cambiada","fr":"Adresse e-mail modifiée","hi":"ईमेल पता बदल गया","id":"Alamat email diubah","pt-BR":"Endereço de e-mail alterado","ru":"Адрес электронной почты изменен","ur":"ای میل ایڈریس بدل گیا۔","zh-CN":"电子邮件地址已更改"};

export function settings_account_email_changed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
