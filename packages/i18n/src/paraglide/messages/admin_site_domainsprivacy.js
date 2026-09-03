import { getLocale } from '../runtime.js';

const translations = {"ar":"تعرض حالة النطاق فقط، من دون رموز تحقق أو بيانات اعتماد.","bn":"Domains Privacy","de":"Domains Privacy","en":"Domains Privacy","es":"Domains Privacy","fr":"Domains Privacy","hi":"Domains Privacy","id":"Domains Privacy","pt-BR":"Domains Privacy","ru":"Domains Privacy","ur":"Domains Privacy","zh-CN":"Domains Privacy"};

export function admin_site_domainsprivacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
