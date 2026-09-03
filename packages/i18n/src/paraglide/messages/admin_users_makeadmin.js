import { getLocale } from '../runtime.js';

const translations = {"ar":"تعيين مشرف","bn":"Make Admin","de":"Make Admin","en":"Make Admin","es":"Make Admin","fr":"Make Admin","hi":"Make Admin","id":"Make Admin","pt-BR":"Make Admin","ru":"Make Admin","ur":"Make Admin","zh-CN":"Make Admin"};

export function admin_users_makeadmin(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
