import { getLocale } from '../runtime.js';

const translations = {"ar":"تسجيل الخروج","bn":"সাইন আউট করুন","de":"Abmelden","en":"Sign out","es":"Cerrar sesión","fr":"Se déconnecter","hi":"साइन आउट करें","id":"Keluar","pt-BR":"Sair","ru":"Выйти","ur":"سائن آؤٹ کریں۔","zh-CN":"退出"};

export function account_signout(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
