import { getLocale } from '../runtime.js';

const translations = {"ar":"الدعوات المعلّقة","bn":"মুলতুবি আমন্ত্রণ","de":"Ausstehende Einladungen","en":"Pending invitations","es":"Invitaciones pendientes","fr":"Invitations en attente","hi":"लंबित निमंत्रण","id":"Undangan yang tertunda","pt-BR":"Convites pendentes","ru":"Ожидаемые приглашения","ur":"زیر التواء دعوتیں۔","zh-CN":"待处理的邀请"};

export function settings_members_pendinginvitations(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
