import { getLocale } from '../runtime.js';

const translations = {"ar":"يحتاج إلى مراجعة","bn":"Attention","de":"Attention","en":"Attention","es":"Attention","fr":"Attention","hi":"Attention","id":"Attention","pt-BR":"Attention","ru":"Attention","ur":"Attention","zh-CN":"Attention"};

export function admin_site_attention(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
