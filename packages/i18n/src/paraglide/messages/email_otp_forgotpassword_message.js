import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدم هذا الرمز لمرة واحدة لإعادة تعيين كلمة مرورك.","bn":"Use this one-time code to reset your password.","de":"Use this one-time code to reset your password.","en":"Use this one-time code to reset your password.","es":"Use this one-time code to reset your password.","fr":"Use this one-time code to reset your password.","hi":"Use this one-time code to reset your password.","id":"Use this one-time code to reset your password.","pt-BR":"Use this one-time code to reset your password.","ru":"Use this one-time code to reset your password.","ur":"Use this one-time code to reset your password.","zh-CN":"Use this one-time code to reset your password."};

export function email_otp_forgotpassword_message(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
