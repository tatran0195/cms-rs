import { getLocale } from '../runtime.js';

const translations = {"ar":"الكل","bn":"All","de":"All","en":"All","es":"All","fr":"All","hi":"All","id":"All","pt-BR":"All","ru":"All","ur":"All","zh-CN":"All"};

export function admin_sites_all(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
