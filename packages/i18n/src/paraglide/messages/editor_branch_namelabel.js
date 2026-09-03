import { getLocale } from '../runtime.js';

const translations = {"ar":"اسم الإصدار","bn":"সংস্করণের নাম","de":"Versionsname","en":"Version name","es":"Nombre de la versión","fr":"Nom de la version","hi":"संस्करण का नाम","id":"Nama versi","pt-BR":"Nome da versão","ru":"Название версии","ur":"ورژن کا نام","zh-CN":"版本名称"};

export function editor_branch_namelabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
