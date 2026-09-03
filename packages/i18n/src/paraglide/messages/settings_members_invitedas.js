import { getLocale } from '../runtime.js';

const translations = {"ar":"مدعوّ بصفة {role}","bn":"{role} হিসাবে আমন্ত্রিত","de":"Eingeladen als {role}","en":"Invited as {role}","es":"Invitado como {role}","fr":"Invité en tant que {role}","hi":"{role} के रूप में आमंत्रित किया गया","id":"Diundang sebagai {role}","pt-BR":"Convidado como {role}","ru":"Приглашен как {role}","ur":"{role} کے بطور مدعو کیا گیا","zh-CN":"受邀作为 {role}"};

export function settings_members_invitedas(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
