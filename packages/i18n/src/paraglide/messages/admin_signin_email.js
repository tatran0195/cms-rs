import { getLocale } from '../runtime.js';

const translations = {"ar":"بريد المشرف","bn":"Admin email","de":"Admin email","en":"Admin email","es":"Admin email","fr":"Admin email","hi":"Admin email","id":"Admin email","pt-BR":"Admin email","ru":"Admin email","ur":"Admin email","zh-CN":"Admin email"};

export function admin_signin_email(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
