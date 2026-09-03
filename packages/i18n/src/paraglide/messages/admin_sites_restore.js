import { getLocale } from '../runtime.js';

const translations = {"ar":"استعادة","bn":"Restore","de":"Restore","en":"Restore","es":"Restore","fr":"Restore","hi":"Restore","id":"Restore","pt-BR":"Restore","ru":"Restore","ur":"Restore","zh-CN":"Restore"};

export function admin_sites_restore(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
