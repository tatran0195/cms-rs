import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر نقل الملكية","bn":"মালিকানা হস্তান্তর করা যায়নি","de":"Das Eigentum konnte nicht übertragen werden","en":"Could not transfer ownership","es":"No se pudo transferir la propiedad","fr":"Impossible de transférer la propriété","hi":"स्वामित्व हस्तांतरित नहीं किया जा सका","id":"Tidak dapat mentransfer kepemilikan","pt-BR":"Não foi possível transferir a propriedade","ru":"Не удалось передать право собственности","ur":"ملکیت منتقل نہیں ہو سکی","zh-CN":"无法转移所有权"};

export function settings_members_toast_transfererror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
