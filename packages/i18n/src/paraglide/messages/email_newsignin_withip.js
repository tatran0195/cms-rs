import { getLocale } from '../runtime.js';

const translations = {"ar":"رصدنا تسجيل دخول جديدًا إلى حسابك من موقع جديد (عنوان IP: {ipAddress}).","bn":"We noticed a new sign-in to your account from a new location (IP {ipAddress}).","de":"We noticed a new sign-in to your account from a new location (IP {ipAddress}).","en":"We noticed a new sign-in to your account from a new location (IP {ipAddress}).","es":"We noticed a new sign-in to your account from a new location (IP {ipAddress}).","fr":"We noticed a new sign-in to your account from a new location (IP {ipAddress}).","hi":"We noticed a new sign-in to your account from a new location (IP {ipAddress}).","id":"We noticed a new sign-in to your account from a new location (IP {ipAddress}).","pt-BR":"We noticed a new sign-in to your account from a new location (IP {ipAddress}).","ru":"We noticed a new sign-in to your account from a new location (IP {ipAddress}).","ur":"We noticed a new sign-in to your account from a new location (IP {ipAddress}).","zh-CN":"We noticed a new sign-in to your account from a new location (IP {ipAddress})."};

export function email_newsignin_withip(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
