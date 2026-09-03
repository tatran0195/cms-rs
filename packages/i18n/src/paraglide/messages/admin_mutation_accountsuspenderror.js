import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر إيقاف الحساب","bn":"Could not suspend the account","de":"Could not suspend the account","en":"Could not suspend the account","es":"Could not suspend the account","fr":"Could not suspend the account","hi":"Could not suspend the account","id":"Could not suspend the account","pt-BR":"Could not suspend the account","ru":"Could not suspend the account","ur":"Could not suspend the account","zh-CN":"Could not suspend the account"};

export function admin_mutation_accountsuspenderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
