import { getLocale } from '../runtime.js';

const translations = {"ar":"واجهة العميل","bn":"Customer view","de":"Customer view","en":"Customer view","es":"Customer view","fr":"Customer view","hi":"Customer view","id":"Customer view","pt-BR":"Customer view","ru":"Customer view","ur":"Customer view","zh-CN":"Customer view"};

export function admin_sites_customerview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
