import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل بريدًا إلكترونيًا صالحًا","bn":"একটি বৈধ ইমেল ঠিকানা লিখুন","de":"Geben Sie eine gültige E-Mail-Adresse ein","en":"Enter a valid email address","es":"Introduzca una dirección de correo electrónico válida","fr":"Entrez une adresse e-mail valide","hi":"एक वैध ईमेल पता दर्ज करें","id":"Masukkan alamat email yang valid","pt-BR":"Insira um endereço de e-mail válido","ru":"Введите действительный адрес электронной почты","ur":"ایک درست ای میل ایڈریس درج کریں۔","zh-CN":"输入有效的电子邮件地址"};

export function validation_emailinvalid(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
