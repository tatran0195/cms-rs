import { getLocale } from '../runtime.js';

const translations = {"ar":"نقل الملكية","bn":"মালিকানা হস্তান্তর","de":"Eigentum übertragen","en":"Transfer ownership","es":"Transferir propiedad","fr":"Transférer la propriété","hi":"स्वामित्व स्थानांतरित करें","id":"Mentransfer kepemilikan","pt-BR":"Transferir propriedade","ru":"Передача права собственности","ur":"ملکیت منتقل کریں۔","zh-CN":"转让所有权"};

export function settings_members_transferownership(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
