import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّرت إزالة العضو","bn":"সদস্যকে সরানো যায়নি","de":"Das Mitglied konnte nicht entfernt werden","en":"Could not remove the member","es":"No se pudo eliminar el miembro","fr":"Impossible de supprimer le membre","hi":"सदस्य को हटाया नहीं जा सका","id":"Tidak dapat menghapus anggota","pt-BR":"Não foi possível remover o membro","ru":"Не удалось удалить участника","ur":"ممبر کو ہٹایا نہیں جا سکا","zh-CN":"无法删除该成员"};

export function settings_members_toast_removeerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
