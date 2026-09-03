import { getLocale } from '../runtime.js';

const translations = {"ar":"لم يُربط نطاق مخصص بهذا الموقع بعد.","bn":"No Domains Body","de":"No Domains Body","en":"No Domains Body","es":"No Domains Body","fr":"No Domains Body","hi":"No Domains Body","id":"No Domains Body","pt-BR":"No Domains Body","ru":"No Domains Body","ur":"No Domains Body","zh-CN":"No Domains Body"};

export function admin_site_nodomainsbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
