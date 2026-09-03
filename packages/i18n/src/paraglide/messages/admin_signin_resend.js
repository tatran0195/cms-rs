import { getLocale } from '../runtime.js';

const translations = {"ar":"إعادة إرسال الرمز","bn":"Resend code","de":"Resend code","en":"Resend code","es":"Resend code","fr":"Resend code","hi":"Resend code","id":"Resend code","pt-BR":"Resend code","ru":"Resend code","ur":"Resend code","zh-CN":"Resend code"};

export function admin_signin_resend(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
