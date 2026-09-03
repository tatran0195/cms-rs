import { getLocale } from '../runtime.js';

const translations = {"ar":"تم إلغاء الدعوة","bn":"আমন্ত্রণ প্রত্যাহার করা হয়েছে৷","de":"Einladung widerrufen","en":"Invitation revoked","es":"Invitación revocada","fr":"Invitation révoquée","hi":"निमंत्रण रद्द कर दिया गया","id":"Undangan dicabut","pt-BR":"Convite revogado","ru":"Приглашение отозвано","ur":"دعوت نامہ منسوخ کر دیا گیا۔","zh-CN":"邀请已被撤销"};

export function settings_members_toast_invitationrevoked(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
