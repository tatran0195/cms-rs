import { getLocale } from '../runtime.js';

const translations = {"ar":"دعوة مؤسسة جديدة","bn":"Invite a new organization","de":"Invite a new organization","en":"Invite a new organization","es":"Invite a new organization","fr":"Invite a new organization","hi":"Invite a new organization","id":"Invite a new organization","pt-BR":"Invite a new organization","ru":"Invite a new organization","ur":"Invite a new organization","zh-CN":"Invite a new organization"};

export function admin_sites_invitetitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
