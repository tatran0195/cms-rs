import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد سجلات حديثة تطابق هذا الصف والبحث.","bn":"No recent records match this queue and search.","de":"No recent records match this queue and search.","en":"No recent records match this queue and search.","es":"No recent records match this queue and search.","fr":"No recent records match this queue and search.","hi":"No recent records match this queue and search.","id":"No recent records match this queue and search.","pt-BR":"No recent records match this queue and search.","ru":"No recent records match this queue and search.","ur":"No recent records match this queue and search.","zh-CN":"No recent records match this queue and search."};

export function admin_operations_emptyrecords(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
