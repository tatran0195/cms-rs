import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يوجد أعضاء بعد.","bn":"এখনো কোনো সদস্য নেই।","de":"Noch keine Mitglieder.","en":"No members yet.","es":"Aún no hay miembros.","fr":"Aucun membre pour l'instant.","hi":"अभी तक कोई सदस्य नहीं.","id":"Belum ada anggota.","pt-BR":"Nenhum membro ainda.","ru":"Пока нет участников.","ur":"ابھی تک کوئی ممبر نہیں۔","zh-CN":"还没有会员。"};

export function settings_members_empty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
