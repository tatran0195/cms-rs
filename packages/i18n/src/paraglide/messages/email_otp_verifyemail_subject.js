import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز نيبليف لتأكيد بريدك الإلكتروني","bn":"Your Nibleaf email verification code","de":"Your Nibleaf email verification code","en":"Your Nibleaf email verification code","es":"Your Nibleaf email verification code","fr":"Your Nibleaf email verification code","hi":"Your Nibleaf email verification code","id":"Your Nibleaf email verification code","pt-BR":"Your Nibleaf email verification code","ru":"Your Nibleaf email verification code","ur":"Your Nibleaf email verification code","zh-CN":"Your Nibleaf email verification code"};

export function email_otp_verifyemail_subject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
