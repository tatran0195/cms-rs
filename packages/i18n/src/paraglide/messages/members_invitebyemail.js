import { getLocale } from '../runtime.js';

const translations = {"ar":"الدعوة عبر البريد الإلكتروني","bn":"ইমেল দ্বারা আমন্ত্রণ","de":"Per E-Mail einladen","en":"Invite by email","es":"Invitar por correo electrónico","fr":"Inviter par email","hi":"ईमेल द्वारा आमंत्रित करें","id":"Undang melalui email","pt-BR":"Convidar por e-mail","ru":"Пригласить по электронной почте","ur":"ای میل کے ذریعے مدعو کریں۔","zh-CN":"通过电子邮件邀请"};

export function members_invitebyemail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
