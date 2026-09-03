import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدم هذا الرمز لمرة واحدة لتغيير بريدك الإلكتروني.","bn":"Use this one-time code to change your email.","de":"Use this one-time code to change your email.","en":"Use this one-time code to change your email.","es":"Use this one-time code to change your email.","fr":"Use this one-time code to change your email.","hi":"Use this one-time code to change your email.","id":"Use this one-time code to change your email.","pt-BR":"Use this one-time code to change your email.","ru":"Use this one-time code to change your email.","ur":"Use this one-time code to change your email.","zh-CN":"Use this one-time code to change your email."};

export function email_otp_changeemail_message(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
