import { getLocale } from '../runtime.js';

const translations = {"ar":"نسخ رابط الدعوة","bn":"আমন্ত্রণ লিঙ্ক কপি করুন","de":"Einladungslink kopieren","en":"Copy invite link","es":"Copiar enlace de invitación","fr":"Copier le lien d'invitation","hi":"आमंत्रण लिंक कॉपी करें","id":"Salin tautan undangan","pt-BR":"Copiar link de convite","ru":"Скопировать ссылку-приглашение","ur":"دعوت کا لنک کاپی کریں۔","zh-CN":"复制邀请链接"};

export function settings_members_copyinvitelink(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
