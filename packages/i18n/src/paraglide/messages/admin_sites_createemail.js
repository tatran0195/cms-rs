import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء وإرسال البريد","bn":"Create email","de":"Create email","en":"Create email","es":"Create email","fr":"Create email","hi":"Create email","id":"Create email","pt-BR":"Create email","ru":"Create email","ur":"Create email","zh-CN":"Create email"};

export function admin_sites_createemail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
