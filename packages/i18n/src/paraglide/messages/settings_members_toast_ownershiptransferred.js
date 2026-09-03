import { getLocale } from '../runtime.js';

const translations = {"ar":"تم نقل الملكية","bn":"মালিকানা হস্তান্তর","de":"Eigentum übertragen","en":"Ownership transferred","es":"Propiedad transferida","fr":"Propriété transférée","hi":"स्वामित्व हस्तांतरित","id":"Kepemilikan dialihkan","pt-BR":"Propriedade transferida","ru":"Право собственности передано","ur":"ملکیت منتقل کر دی گئی۔","zh-CN":"所有权转让"};

export function settings_members_toast_ownershiptransferred(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
