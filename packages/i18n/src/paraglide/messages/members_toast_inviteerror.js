import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر إرسال الدعوة","bn":"আমন্ত্রণ জানাতে পারিনি","de":"Konnte nicht eingeladen werden","en":"Could not invite","es":"No se pudo invitar","fr":"Impossible d'inviter","hi":"आमंत्रित नहीं किया जा सका","id":"Tidak dapat mengundang","pt-BR":"Não foi possível convidar","ru":"Не удалось пригласить","ur":"مدعو نہیں کیا جا سکا","zh-CN":"无法邀请"};

export function members_toast_inviteerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
