import { getLocale } from '../runtime.js';

const translations = {"ar":"رصدنا تسجيل دخول جديدًا إلى حسابك من جهاز جديد.","bn":"We noticed a new sign-in to your account from a new device.","de":"We noticed a new sign-in to your account from a new device.","en":"We noticed a new sign-in to your account from a new device.","es":"We noticed a new sign-in to your account from a new device.","fr":"We noticed a new sign-in to your account from a new device.","hi":"We noticed a new sign-in to your account from a new device.","id":"We noticed a new sign-in to your account from a new device.","pt-BR":"We noticed a new sign-in to your account from a new device.","ru":"We noticed a new sign-in to your account from a new device.","ur":"We noticed a new sign-in to your account from a new device.","zh-CN":"We noticed a new sign-in to your account from a new device."};

export function email_newsignin_withoutip(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
