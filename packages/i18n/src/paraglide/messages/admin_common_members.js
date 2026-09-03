import { getLocale } from '../runtime.js';

const translations = {"ar":"الأعضاء","bn":"Members","de":"Members","en":"Members","es":"Members","fr":"Members","hi":"Members","id":"Members","pt-BR":"Members","ru":"Members","ur":"Members","zh-CN":"Members"};

export function admin_common_members(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
