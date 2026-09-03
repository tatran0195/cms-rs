import { getLocale } from '../runtime.js';

const translations = {"ar":"دعوة عضو","bn":"একজন সদস্যকে আমন্ত্রণ জানান","de":"Laden Sie ein Mitglied ein","en":"Invite a member","es":"Invitar a un miembro","fr":"Inviter un membre","hi":"किसी सदस्य को आमंत्रित करें","id":"Undang seorang anggota","pt-BR":"Convide um membro","ru":"Пригласить участника","ur":"کسی ممبر کو مدعو کریں۔","zh-CN":"邀请会员"};

export function settings_members_invitetitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
