import { getLocale } from '../runtime.js';

const translations = {"ar":"أُنشئت الدعوة — استخدم نسخ الرابط أدناه","bn":"Invitation created — use Copy link below","de":"Invitation created — use Copy link below","en":"Invitation created — use Copy link below","es":"Invitation created — use Copy link below","fr":"Invitation created — use Copy link below","hi":"Invitation created — use Copy link below","id":"Invitation created — use Copy link below","pt-BR":"Invitation created — use Copy link below","ru":"Invitation created — use Copy link below","ur":"Invitation created — use Copy link below","zh-CN":"Invitation created — use Copy link below"};

export function admin_sites_invitationcreated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
