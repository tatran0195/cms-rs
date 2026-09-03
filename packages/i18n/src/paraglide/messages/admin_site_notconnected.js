import { getLocale } from '../runtime.js';

const translations = {"ar":"غير متصل","bn":"Not Connected","de":"Not Connected","en":"Not Connected","es":"Not Connected","fr":"Not Connected","hi":"Not Connected","id":"Not Connected","pt-BR":"Not Connected","ru":"Not Connected","ur":"Not Connected","zh-CN":"Not Connected"};

export function admin_site_notconnected(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
