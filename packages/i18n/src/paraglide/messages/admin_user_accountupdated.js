import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر تحديث للحساب","bn":"Account Updated","de":"Account Updated","en":"Account Updated","es":"Account Updated","fr":"Account Updated","hi":"Account Updated","id":"Account Updated","pt-BR":"Account Updated","ru":"Account Updated","ur":"Account Updated","zh-CN":"Account Updated"};

export function admin_user_accountupdated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
