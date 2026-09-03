import { getLocale } from '../runtime.js';

const translations = {"ar":"اكتمال التسجيل","bn":"Signup Completed","de":"Signup Completed","en":"Signup Completed","es":"Signup Completed","fr":"Signup Completed","hi":"Signup Completed","id":"Signup Completed","pt-BR":"Signup Completed","ru":"Signup Completed","ur":"Signup Completed","zh-CN":"Signup Completed"};

export function admin_activity_signupcompleted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
