import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز البريد لمرة واحدة متاح","bn":"Email Otp Available","de":"Email Otp Available","en":"Email Otp Available","es":"Email Otp Available","fr":"Email Otp Available","hi":"Email Otp Available","id":"Email Otp Available","pt-BR":"Email Otp Available","ru":"Email Otp Available","ur":"Email Otp Available","zh-CN":"Email Otp Available"};

export function admin_user_emailotpavailable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
