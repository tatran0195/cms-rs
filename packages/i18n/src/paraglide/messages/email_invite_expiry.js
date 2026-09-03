import { getLocale } from '../runtime.js';

const translations = {"ar":"تنتهي صلاحية هذه الدعوة خلال {days} أيام.","bn":"This invitation expires in {days} days.","de":"This invitation expires in {days} days.","en":"This invitation expires in {days} days.","es":"This invitation expires in {days} days.","fr":"This invitation expires in {days} days.","hi":"This invitation expires in {days} days.","id":"This invitation expires in {days} days.","pt-BR":"This invitation expires in {days} days.","ru":"This invitation expires in {days} days.","ur":"This invitation expires in {days} days.","zh-CN":"This invitation expires in {days} days."};

export function email_invite_expiry(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
