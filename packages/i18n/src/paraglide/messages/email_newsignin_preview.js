import { getLocale } from '../runtime.js';

const translations = {"ar":"رصدنا تسجيل دخول من جهاز أو موقع جديد.","bn":"We noticed a sign-in from a new device or location.","de":"We noticed a sign-in from a new device or location.","en":"We noticed a sign-in from a new device or location.","es":"We noticed a sign-in from a new device or location.","fr":"We noticed a sign-in from a new device or location.","hi":"We noticed a sign-in from a new device or location.","id":"We noticed a sign-in from a new device or location.","pt-BR":"We noticed a sign-in from a new device or location.","ru":"We noticed a sign-in from a new device or location.","ur":"We noticed a sign-in from a new device or location.","zh-CN":"We noticed a sign-in from a new device or location."};

export function email_newsignin_preview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
