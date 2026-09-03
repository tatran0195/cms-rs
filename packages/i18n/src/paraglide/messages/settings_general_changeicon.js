import { getLocale } from '../runtime.js';

const translations = {"ar":"تغيير الأيقونة","bn":"আইকন পরিবর্তন করুন","de":"Symbol ändern","en":"Change icon","es":"Cambiar icono","fr":"Changer d'icône","hi":"आइकन बदलें","id":"Ubah ikon","pt-BR":"Alterar ícone","ru":"Изменить значок","ur":"آئیکن تبدیل کریں۔","zh-CN":"更改图标"};

export function settings_general_changeicon(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
