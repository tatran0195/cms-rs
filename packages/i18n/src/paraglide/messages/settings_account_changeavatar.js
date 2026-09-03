import { getLocale } from '../runtime.js';

const translations = {"ar":"تغيير الصورة الرمزية","bn":"অবতার পরিবর্তন করুন","de":"Avatar ändern","en":"Change avatar","es":"Cambiar avatar","fr":"Changer d'avatar","hi":"अवतार बदलें","id":"Ubah avatar","pt-BR":"Alterar avatar","ru":"Сменить аватар","ur":"اوتار تبدیل کریں۔","zh-CN":"更改头像"};

export function settings_account_changeavatar(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
