import { getLocale } from '../runtime.js';

const translations = {"ar":"إعادة الإرسال خلال {seconds}ث","bn":"Resend in {seconds}s","de":"Resend in {seconds}s","en":"Resend in {seconds}s","es":"Resend in {seconds}s","fr":"Resend in {seconds}s","hi":"Resend in {seconds}s","id":"Resend in {seconds}s","pt-BR":"Resend in {seconds}s","ru":"Resend in {seconds}s","ur":"Resend in {seconds}s","zh-CN":"Resend in {seconds}s"};

export function admin_signin_resendin(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
