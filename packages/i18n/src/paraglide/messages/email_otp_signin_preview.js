import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدم هذا الرمز لمرة واحدة لتسجيل الدخول.","bn":"Use this one-time code to sign in.","de":"Use this one-time code to sign in.","en":"Use this one-time code to sign in.","es":"Use this one-time code to sign in.","fr":"Use this one-time code to sign in.","hi":"Use this one-time code to sign in.","id":"Use this one-time code to sign in.","pt-BR":"Use this one-time code to sign in.","ru":"Use this one-time code to sign in.","ur":"Use this one-time code to sign in.","zh-CN":"Use this one-time code to sign in."};

export function email_otp_signin_preview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
