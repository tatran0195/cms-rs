import { getLocale } from '../runtime.js';

const translations = {"ar":"تأكيد البريد الجديد","bn":"নতুন ইমেল নিশ্চিত করুন","de":"Neue E-Mail bestätigen","en":"Confirm new email","es":"Confirmar nuevo correo electrónico","fr":"Confirmer le nouvel e-mail","hi":"नये ईमेल की पुष्टि करें","id":"Konfirmasi email baru","pt-BR":"Confirmar novo e-mail","ru":"Подтвердите новый адрес электронной почты","ur":"نئے ای میل کی تصدیق کریں۔","zh-CN":"确认新电子邮件"};

export function settings_account_email_confirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
