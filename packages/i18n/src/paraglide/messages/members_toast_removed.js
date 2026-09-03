import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت إزالة العضو","bn":"সদস্য সরানো হয়েছে","de":"Mitglied entfernt","en":"Member removed","es":"Miembro eliminado","fr":"Membre supprimé","hi":"सदस्य हटा दिया गया","id":"Anggota dihapus","pt-BR":"Membro removido","ru":"Участник удален","ur":"ممبر کو ہٹا دیا گیا۔","zh-CN":"会员已删除"};

export function members_toast_removed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
