import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز نيبليف الخاص بك","bn":"Your Nibleaf code","de":"Your Nibleaf code","en":"Your Nibleaf code","es":"Your Nibleaf code","fr":"Your Nibleaf code","hi":"Your Nibleaf code","id":"Your Nibleaf code","pt-BR":"Your Nibleaf code","ru":"Your Nibleaf code","ur":"Your Nibleaf code","zh-CN":"Your Nibleaf code"};

export function email_otp_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
