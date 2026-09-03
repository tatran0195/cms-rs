import { getLocale } from '../runtime.js';

const translations = {"ar":"الأعضاء","bn":"সদস্যরা","de":"Mitglieder","en":"Members","es":"Miembros","fr":"Membres","hi":"सदस्य","id":"Anggota","pt-BR":"Membros","ru":"Члены","ur":"ممبران","zh-CN":"会员"};

export function settings_members_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
