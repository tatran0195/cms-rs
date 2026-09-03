import { getLocale } from '../runtime.js';

const translations = {"ar":"دعوة قارئ","bn":"পাঠককে আমন্ত্রণ জানান","de":"Leser einladen","en":"Invite reader","es":"invitar lector","fr":"Inviter un lecteur","hi":"पाठक को आमंत्रित करें","id":"Undang pembaca","pt-BR":"Convidar leitor","ru":"Пригласить читателя","ur":"قاری کو مدعو کریں۔","zh-CN":"邀请读者"};

export function settings_authentication_reader_invite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
