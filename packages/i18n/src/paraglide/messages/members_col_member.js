import { getLocale } from '../runtime.js';

const translations = {"ar":"العضو","bn":"সদস্য","de":"Mitglied","en":"Member","es":"Miembro","fr":"Membre","hi":"सदस्य","id":"Anggota","pt-BR":"Membro","ru":"Член","ur":"ممبر","zh-CN":"会员"};

export function members_col_member(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
