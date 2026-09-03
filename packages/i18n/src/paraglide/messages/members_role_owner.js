import { getLocale } from '../runtime.js';

const translations = {"ar":"مالك","bn":"মালিক","de":"Besitzer","en":"Owner","es":"propietario","fr":"Propriétaire","hi":"मालिक","id":"Pemilik","pt-BR":"Proprietário","ru":"Владелец","ur":"مالک","zh-CN":"业主"};

export function members_role_owner(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
