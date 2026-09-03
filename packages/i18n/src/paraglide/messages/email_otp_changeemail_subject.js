import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز نيبليف لتغيير بريدك الإلكتروني","bn":"Your Nibleaf code to change your email","de":"Your Nibleaf code to change your email","en":"Your Nibleaf code to change your email","es":"Your Nibleaf code to change your email","fr":"Your Nibleaf code to change your email","hi":"Your Nibleaf code to change your email","id":"Your Nibleaf code to change your email","pt-BR":"Your Nibleaf code to change your email","ru":"Your Nibleaf code to change your email","ur":"Your Nibleaf code to change your email","zh-CN":"Your Nibleaf code to change your email"};

export function email_otp_changeemail_subject(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
