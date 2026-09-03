import { getLocale } from '../runtime.js';

const translations = {"ar":"الدعوة جاهزة لـ {email}","bn":"{email} এর জন্য আমন্ত্রণ প্রস্তুত","de":"Einladung bereit für {email}","en":"Invitation ready for {email}","es":"Invitación lista para {email}","fr":"Invitation prête pour {email}","hi":"{email} के लिए निमंत्रण तैयार है","id":"Undangan siap untuk {email}","pt-BR":"Convite pronto para {email}","ru":"Приглашение готово для {email}","ur":"{email} کے لئے دعوت نامہ تیار ہے","zh-CN":"已准备好 {email} 的邀请"};

export function settings_members_invitecreated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
