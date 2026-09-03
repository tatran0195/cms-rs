import { getLocale } from '../runtime.js';

const translations = {"ar":"مشاركة","bn":"Share","de":"Share","en":"Share","es":"Share","fr":"Share","hi":"Share","id":"Share","pt-BR":"Share","ru":"Share","ur":"Share","zh-CN":"Share"};

export function blog_share(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
