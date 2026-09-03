import { getLocale } from '../runtime.js';

const translations = {"ar":"إزالة العضو","bn":"সদস্য সরান","de":"Mitglied entfernen","en":"Remove member","es":"Eliminar miembro","fr":"Supprimer un membre","hi":"सदस्य हटाएँ","id":"Hapus anggota","pt-BR":"Remover membro","ru":"Удалить участника","ur":"ممبر کو ہٹا دیں۔","zh-CN":"删除成员"};

export function members_remove(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
