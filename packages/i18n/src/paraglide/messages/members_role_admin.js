import { getLocale } from '../runtime.js';

const translations = {"ar":"مسؤول","bn":"অ্যাডমিন","de":"Admin","en":"Admin","es":"administrador","fr":"Administrateur","hi":"व्यवस्थापक","id":"Admin","pt-BR":"Administrador","ru":"Админ","ur":"ایڈمن","zh-CN":"管理员"};

export function members_role_admin(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
