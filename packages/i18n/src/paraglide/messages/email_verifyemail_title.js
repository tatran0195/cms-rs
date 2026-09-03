import { getLocale } from '../runtime.js';

const translations = {"ar":"تأكيد عنوان بريدك الإلكتروني","bn":"Verify your email address","de":"Verify your email address","en":"Verify your email address","es":"Verify your email address","fr":"Verify your email address","hi":"Verify your email address","id":"Verify your email address","pt-BR":"Verify your email address","ru":"Verify your email address","ur":"Verify your email address","zh-CN":"Verify your email address"};

export function email_verifyemail_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
