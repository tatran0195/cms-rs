import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدم هذا الرمز لمرة واحدة لتأكيد بريدك الإلكتروني.","bn":"Use this one-time code to verify your email.","de":"Use this one-time code to verify your email.","en":"Use this one-time code to verify your email.","es":"Use this one-time code to verify your email.","fr":"Use this one-time code to verify your email.","hi":"Use this one-time code to verify your email.","id":"Use this one-time code to verify your email.","pt-BR":"Use this one-time code to verify your email.","ru":"Use this one-time code to verify your email.","ur":"Use this one-time code to verify your email.","zh-CN":"Use this one-time code to verify your email."};

export function email_otp_verifyemail_preview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
