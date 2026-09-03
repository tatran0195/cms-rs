import { getLocale } from '../runtime.js';

const translations = {"ar":"دعوة مؤسسة","bn":"Invite organization","de":"Invite organization","en":"Invite organization","es":"Invite organization","fr":"Invite organization","hi":"Invite organization","id":"Invite organization","pt-BR":"Invite organization","ru":"Invite organization","ur":"Invite organization","zh-CN":"Invite organization"};

export function admin_sites_inviteorganization(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
