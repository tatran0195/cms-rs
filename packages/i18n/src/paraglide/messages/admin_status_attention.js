import { getLocale } from '../runtime.js';

const translations = {"ar":"يحتاج إلى مراجعة","bn":"Needs attention","de":"Needs attention","en":"Needs attention","es":"Needs attention","fr":"Needs attention","hi":"Needs attention","id":"Needs attention","pt-BR":"Needs attention","ru":"Needs attention","ur":"Needs attention","zh-CN":"Needs attention"};

export function admin_status_attention(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
