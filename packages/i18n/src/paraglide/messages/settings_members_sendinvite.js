import { getLocale } from '../runtime.js';

const translations = {"ar":"إرسال الدعوة","bn":"আমন্ত্রণ পাঠান","de":"Einladung senden","en":"Send invite","es":"enviar invitación","fr":"Envoyer une invitation","hi":"आमंत्रण भेजें","id":"Kirim undangan","pt-BR":"Enviar convite","ru":"Отправить приглашение","ur":"دعوت نامہ بھیجیں۔","zh-CN":"发送邀请"};

export function settings_members_sendinvite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
