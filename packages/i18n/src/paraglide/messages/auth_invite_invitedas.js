import { getLocale } from '../runtime.js';

const translations = {"ar":"مدعوّ بالبريد {email}","bn":"{email} হিসাবে আমন্ত্রিত","de":"Eingeladen als {email}","en":"Invited as {email}","es":"Invitado como {email}","fr":"Invité en tant que {email}","hi":"{email} के रूप में आमंत्रित किया गया","id":"Diundang sebagai {email}","pt-BR":"Convidado como {email}","ru":"Приглашен как {email}","ur":"{email} کے بطور مدعو کیا گیا","zh-CN":"受邀作为 {email}"};

export function auth_invite_invitedas(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
