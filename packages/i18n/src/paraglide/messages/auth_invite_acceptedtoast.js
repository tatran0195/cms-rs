import { getLocale } from '../runtime.js';

const translations = {"ar":"تم قبول الدعوة","bn":"আমন্ত্রণ গৃহীত হয়েছে","de":"Einladung angenommen","en":"Invitation accepted","es":"Invitación aceptada","fr":"Invitation acceptée","hi":"निमंत्रण स्वीकार किया गया","id":"Undangan diterima","pt-BR":"Convite aceito","ru":"Приглашение принято","ur":"دعوت قبول کر لی","zh-CN":"已接受邀请"};

export function auth_invite_acceptedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
