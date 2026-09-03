import { getLocale } from '../runtime.js';

const translations = {"ar":"قبول الدعوة","bn":"আমন্ত্রণ গ্রহণ করুন","de":"Einladung annehmen","en":"Accept invitation","es":"Aceptar invitación","fr":"Accepter l'invitation","hi":"निमंत्रण स्वीकार करें","id":"Terima undangan","pt-BR":"Aceitar convite","ru":"Принять приглашение","ur":"دعوت قبول کریں۔","zh-CN":"接受邀请"};

export function auth_invite_accept(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
