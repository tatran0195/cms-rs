import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز إعادة تعيين كلمة مرور نيبليف","bn":"Your Nibleaf password reset code","de":"Your Nibleaf password reset code","en":"Your Nibleaf password reset code","es":"Your Nibleaf password reset code","fr":"Your Nibleaf password reset code","hi":"Your Nibleaf password reset code","id":"Your Nibleaf password reset code","pt-BR":"Your Nibleaf password reset code","ru":"Your Nibleaf password reset code","ur":"Your Nibleaf password reset code","zh-CN":"Your Nibleaf password reset code"};

export function email_otp_forgotpassword_subject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
