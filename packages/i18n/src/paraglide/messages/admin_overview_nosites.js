import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد مواقع بعد.","bn":"No sites yet.","de":"No sites yet.","en":"No sites yet.","es":"No sites yet.","fr":"No sites yet.","hi":"No sites yet.","id":"No sites yet.","pt-BR":"No sites yet.","ru":"No sites yet.","ur":"No sites yet.","zh-CN":"No sites yet."};

export function admin_overview_nosites(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
