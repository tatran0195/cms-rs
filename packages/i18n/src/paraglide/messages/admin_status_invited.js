import { getLocale } from '../runtime.js';

const translations = {"ar":"مدعو","bn":"Invited","de":"Invited","en":"Invited","es":"Invited","fr":"Invited","hi":"Invited","id":"Invited","pt-BR":"Invited","ru":"Invited","ur":"Invited","zh-CN":"Invited"};

export function admin_status_invited(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
