import { getLocale } from '../runtime.js';

const translations = {"ar":"تحقق من البريد الحالي","bn":"বর্তমান ইমেল যাচাই করুন","de":"Überprüfen Sie die aktuelle E-Mail-Adresse","en":"Verify current email","es":"Verificar correo electrónico actual","fr":"Vérifier l'e-mail actuel","hi":"वर्तमान ईमेल सत्यापित करें","id":"Verifikasi email saat ini","pt-BR":"Verifique o e-mail atual","ru":"Подтвердите текущий адрес электронной почты","ur":"موجودہ ای میل کی تصدیق کریں۔","zh-CN":"验证当前电子邮件"};

export function settings_account_email_verifycurrent(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
