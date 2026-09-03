import { getLocale } from '../runtime.js';

const translations = {"ar":"الدعوة قيد الانتظار","bn":"আমন্ত্রণ মুলতুবি আছে","de":"Einladung ausstehend","en":"Invitation pending","es":"Invitación pendiente","fr":"Invitation en attente","hi":"निमंत्रण लंबित है","id":"Undangan tertunda","pt-BR":"Convite pendente","ru":"Приглашение ожидает рассмотрения","ur":"دعوت نامہ زیر التواء ہے۔","zh-CN":"邀请待定"};

export function members_invitationpending(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
