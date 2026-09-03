import { getLocale } from '../runtime.js';

const translations = {"ar":"إلغاء الدعوة","bn":"আমন্ত্রণ প্রত্যাহার করুন","de":"Einladung widerrufen","en":"Revoke invitation","es":"Revocar invitación","fr":"Révoquer l'invitation","hi":"आमंत्रण रद्द करें","id":"Cabut undangan","pt-BR":"Revogar convite","ru":"Отозвать приглашение","ur":"دعوت نامہ منسوخ کریں۔","zh-CN":"撤销邀请"};

export function settings_members_revokeinvite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
