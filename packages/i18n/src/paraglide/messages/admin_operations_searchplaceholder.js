import { getLocale } from '../runtime.js';

const translations = {"ar":"ابحث عن موقع أو نطاق","bn":"Search site or domain","de":"Search site or domain","en":"Search site or domain","es":"Search site or domain","fr":"Search site or domain","hi":"Search site or domain","id":"Search site or domain","pt-BR":"Search site or domain","ru":"Search site or domain","ur":"Search site or domain","zh-CN":"Search site or domain"};

export function admin_operations_searchplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
