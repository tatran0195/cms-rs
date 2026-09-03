import { getLocale } from '../runtime.js';

const translations = {"ar":"المؤسسة جاهزة. انسخ رابط دعوة المالك الصالح لسبعة أيام.","bn":"The organization is ready. Copy its seven-day owner invitation link.","de":"The organization is ready. Copy its seven-day owner invitation link.","en":"The organization is ready. Copy its seven-day owner invitation link.","es":"The organization is ready. Copy its seven-day owner invitation link.","fr":"The organization is ready. Copy its seven-day owner invitation link.","hi":"The organization is ready. Copy its seven-day owner invitation link.","id":"The organization is ready. Copy its seven-day owner invitation link.","pt-BR":"The organization is ready. Copy its seven-day owner invitation link.","ru":"The organization is ready. Copy its seven-day owner invitation link.","ur":"The organization is ready. Copy its seven-day owner invitation link.","zh-CN":"The organization is ready. Copy its seven-day owner invitation link."};

export function admin_sites_inviteready(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
