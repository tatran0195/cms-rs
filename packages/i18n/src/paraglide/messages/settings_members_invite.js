import { getLocale } from '../runtime.js';

const translations = {"ar":"دعوة","bn":"আমন্ত্রণ","de":"Einladen","en":"Invite","es":"invitar","fr":"Inviter","hi":"आमंत्रित करें","id":"Undang","pt-BR":"Convidar","ru":"Пригласить","ur":"دعوت دیں۔","zh-CN":"邀请"};

export function settings_members_invite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
