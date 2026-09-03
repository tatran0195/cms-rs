import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر إلغاء الدعوة","bn":"আমন্ত্রণ প্রত্যাহার করা যায়নি৷","de":"Die Einladung konnte nicht widerrufen werden","en":"Could not revoke the invitation","es":"No se pudo revocar la invitación.","fr":"Impossible de révoquer l'invitation","hi":"आमंत्रण रद्द नहीं किया जा सका","id":"Tidak dapat membatalkan undangan","pt-BR":"Não foi possível revogar o convite","ru":"Не удалось отозвать приглашение","ur":"دعوت نامہ منسوخ نہیں کیا جا سکا","zh-CN":"无法撤销邀请"};

export function settings_members_toast_revokeerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
