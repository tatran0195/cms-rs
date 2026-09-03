import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد مواقع مطابقة","bn":"No sites match","de":"No sites match","en":"No sites match","es":"No sites match","fr":"No sites match","hi":"No sites match","id":"No sites match","pt-BR":"No sites match","ru":"No sites match","ur":"No sites match","zh-CN":"No sites match"};

export function admin_sites_empty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
