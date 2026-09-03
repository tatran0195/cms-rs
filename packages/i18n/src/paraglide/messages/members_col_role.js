import { getLocale } from '../runtime.js';

const translations = {"ar":"الدور","bn":"ভূমিকা","de":"Rolle","en":"Role","es":"Rol","fr":"Rôle","hi":"भूमिका","id":"Peran","pt-BR":"Função","ru":"Роль","ur":"کردار","zh-CN":"角色"};

export function members_col_role(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
