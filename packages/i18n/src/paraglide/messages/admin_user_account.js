import { getLocale } from '../runtime.js';

const translations = {"ar":"الحساب","bn":"Account","de":"Account","en":"Account","es":"Account","fr":"Account","hi":"Account","id":"Account","pt-BR":"Account","ru":"Account","ur":"Account","zh-CN":"Account"};

export function admin_user_account(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
