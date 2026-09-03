import { getLocale } from '../runtime.js';

const translations = {"ar":"تنتهي صلاحية هذا الرابط أحادي الاستخدام خلال {days} أيام.","bn":"This one-time link expires in {days} days.","de":"This one-time link expires in {days} days.","en":"This one-time link expires in {days} days.","es":"This one-time link expires in {days} days.","fr":"This one-time link expires in {days} days.","hi":"This one-time link expires in {days} days.","id":"This one-time link expires in {days} days.","pt-BR":"This one-time link expires in {days} days.","ru":"This one-time link expires in {days} days.","ur":"This one-time link expires in {days} days.","zh-CN":"This one-time link expires in {days} days."};

export function email_readerinvite_expiry(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
