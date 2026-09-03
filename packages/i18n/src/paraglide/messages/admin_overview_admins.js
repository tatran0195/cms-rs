import { getLocale } from '../runtime.js';

const translations = {"ar":"المشرفون","bn":"Admins","de":"Admins","en":"Admins","es":"Admins","fr":"Admins","hi":"Admins","id":"Admins","pt-BR":"Admins","ru":"Admins","ur":"Admins","zh-CN":"Admins"};

export function admin_overview_admins(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
