import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز تسجيل الدخول إلى نيبليف","bn":"Your Nibleaf sign-in code","de":"Your Nibleaf sign-in code","en":"Your Nibleaf sign-in code","es":"Your Nibleaf sign-in code","fr":"Your Nibleaf sign-in code","hi":"Your Nibleaf sign-in code","id":"Your Nibleaf sign-in code","pt-BR":"Your Nibleaf sign-in code","ru":"Your Nibleaf sign-in code","ur":"Your Nibleaf sign-in code","zh-CN":"Your Nibleaf sign-in code"};

export function email_otp_signin_subject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
