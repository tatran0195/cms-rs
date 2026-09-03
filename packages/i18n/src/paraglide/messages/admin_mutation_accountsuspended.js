import { getLocale } from '../runtime.js';

const translations = {"ar":"أُوقف الحساب","bn":"Account suspended","de":"Account suspended","en":"Account suspended","es":"Account suspended","fr":"Account suspended","hi":"Account suspended","id":"Account suspended","pt-BR":"Account suspended","ru":"Account suspended","ur":"Account suspended","zh-CN":"Account suspended"};

export function admin_mutation_accountsuspended(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
