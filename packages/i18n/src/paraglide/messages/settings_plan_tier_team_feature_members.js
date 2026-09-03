import { getLocale } from '../runtime.js';

const translations = {"ar":"أعضاء وأدوار لكل موقع","bn":"প্রতি সাইট সদস্য এবং ভূমিকা","de":"Mitglieder und Rollen pro Site","en":"Per-site members & roles","es":"Miembros y roles por sitio","fr":"Membres et rôles par site","hi":"प्रति-साइट सदस्य और भूमिकाएँ","id":"Anggota & peran per situs","pt-BR":"Membros e funções por site","ru":"Участники и роли для каждого сайта","ur":"فی سائٹ ممبران اور کردار","zh-CN":"每个站点的成员和角色"};

export function settings_plan_tier_team_feature_members(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
