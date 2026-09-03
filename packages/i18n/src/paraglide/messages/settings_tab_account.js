import { getLocale } from '../runtime.js';

const translations = {"ar":"الحساب","bn":"হিসাব","de":"Konto","en":"Account","es":"cuenta","fr":"Compte","hi":"खाता","id":"Akun","pt-BR":"Conta","ru":"Аккаунт","ur":"اکاؤنٹ","zh-CN":"账户"};

export function settings_tab_account(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
