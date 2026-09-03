import { getLocale } from '../runtime.js';

const translations = {"ar":"ستصبح مشرفًا، ويصبح {name} المالك.","bn":"আপনি একজন অ্যাডমিন হয়ে যাবেন। {name} মালিক হন।","de":"Sie werden Administrator. {name} wird Eigentümer.","en":"You will become an admin. {name} becomes the owner.","es":"Te convertirás en administrador. {name} se convierte en propietario.","fr":"Vous deviendrez administrateur. {name} devient propriétaire.","hi":"आप एडमिन बन जायेंगे. {name} स्वामी बन जाता है।","id":"Anda akan menjadi admin. {name} menjadi pemilik.","pt-BR":"Você se tornará um administrador. {name} torna-se o proprietário.","ru":"Вы станете администратором. {name} становится владельцем.","ur":"آپ ایڈمن بن جائیں گے۔ {name} مالک بن جاتا ہے۔","zh-CN":"您将成为管理员。 {name} 成为所有者。"};

export function settings_members_transferconfirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
