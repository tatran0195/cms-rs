import { getLocale } from '../runtime.js';

const translations = {"ar":"عند قبول دعوة.","bn":"যখন একটি আমন্ত্রণ গ্রহণ করা হয়.","de":"Wenn eine Einladung angenommen wird.","en":"When an invite is accepted.","es":"Cuando se acepta una invitación.","fr":"Lorsqu'une invitation est acceptée.","hi":"जब कोई आमंत्रण स्वीकार किया जाता है.","id":"Saat undangan diterima.","pt-BR":"Quando um convite é aceito.","ru":"Когда приглашение принято.","ur":"جب دعوت قبول کی جاتی ہے۔","zh-CN":"当邀请被接受时。"};

export function settings_notifications_memberjoined_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
