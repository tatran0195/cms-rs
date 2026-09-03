import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز البريد لمرة واحدة","bn":"Email otp","de":"Email otp","en":"Email otp","es":"Email otp","fr":"Email otp","hi":"Email otp","id":"Email otp","pt-BR":"Email otp","ru":"Email otp","ur":"Email otp","zh-CN":"Email otp"};

export function admin_users_emailotp(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
