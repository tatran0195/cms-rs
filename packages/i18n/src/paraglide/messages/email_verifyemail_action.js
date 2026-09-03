import { getLocale } from '../runtime.js';

const translations = {"ar":"تأكيد البريد الإلكتروني","bn":"Verify email","de":"Verify email","en":"Verify email","es":"Verify email","fr":"Verify email","hi":"Verify email","id":"Verify email","pt-BR":"Verify email","ru":"Verify email","ur":"Verify email","zh-CN":"Verify email"};

export function email_verifyemail_action(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
