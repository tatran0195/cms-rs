import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت دعوة عضو","bn":"সদস্য আমন্ত্রিত","de":"Mitglied eingeladen","en":"Member invited","es":"Miembro invitado","fr":"Membre invité","hi":"सदस्य को आमंत्रित किया गया","id":"Anggota diundang","pt-BR":"Membro convidado","ru":"Участник приглашен","ur":"ممبر کو مدعو کیا گیا۔","zh-CN":"会员邀请"};

export function settings_notifications_memberinvited_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
