import { getLocale } from '../runtime.js';

const translations = {"ar":"انتهت صلاحية الدعوة","bn":"Invitation Expired","de":"Invitation Expired","en":"Invitation Expired","es":"Invitation Expired","fr":"Invitation Expired","hi":"Invitation Expired","id":"Invitation Expired","pt-BR":"Invitation Expired","ru":"Invitation Expired","ur":"Invitation Expired","zh-CN":"Invitation Expired"};

export function admin_site_invitationexpired(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
