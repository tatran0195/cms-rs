import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل الرمز الصحيح المكوّن من 6 أرقام من بريدك الإلكتروني.","bn":"আপনার ইমেল থেকে বৈধ 6-সংখ্যার কোড লিখুন।","de":"Geben Sie den gültigen 6-stelligen Code aus Ihrer E-Mail ein.","en":"Enter the valid 6-digit code from your email.","es":"Ingrese el código válido de 6 dígitos de su correo electrónico.","fr":"Entrez le code valide à 6 chiffres de votre e-mail.","hi":"अपने ईमेल से वैध 6-अंकीय कोड दर्ज करें।","id":"Masukkan kode 6 digit yang valid dari email Anda.","pt-BR":"Digite o código válido de 6 dígitos do seu e-mail.","ru":"Введите действительный 6-значный код с вашего адреса электронной почты.","ur":"اپنے ای میل سے درست 6 ہندسوں کا کوڈ درج کریں۔","zh-CN":"输入电子邮件中的有效 6 位数代码。"};

export function auth_verify_invalidcode(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
