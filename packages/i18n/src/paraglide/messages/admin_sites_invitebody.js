import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ أول موقع توثيق ثم أرسل للمالك بريدًا أو انسخ رابط الدعوة الصالح لسبعة أيام.","bn":"Create its first documentation site, then send the owner an email or copy their seven-day invitation link.","de":"Create its first documentation site, then send the owner an email or copy their seven-day invitation link.","en":"Create its first documentation site, then send the owner an email or copy their seven-day invitation link.","es":"Create its first documentation site, then send the owner an email or copy their seven-day invitation link.","fr":"Create its first documentation site, then send the owner an email or copy their seven-day invitation link.","hi":"Create its first documentation site, then send the owner an email or copy their seven-day invitation link.","id":"Create its first documentation site, then send the owner an email or copy their seven-day invitation link.","pt-BR":"Create its first documentation site, then send the owner an email or copy their seven-day invitation link.","ru":"Create its first documentation site, then send the owner an email or copy their seven-day invitation link.","ur":"Create its first documentation site, then send the owner an email or copy their seven-day invitation link.","zh-CN":"Create its first documentation site, then send the owner an email or copy their seven-day invitation link."};

export function admin_sites_invitebody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
