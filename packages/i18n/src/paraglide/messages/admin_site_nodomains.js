import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد نطاقات","bn":"No Domains","de":"No Domains","en":"No Domains","es":"No Domains","fr":"No Domains","hi":"No Domains","id":"No Domains","pt-BR":"No Domains","ru":"No Domains","ur":"No Domains","zh-CN":"No Domains"};

export function admin_site_nodomains(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
