import { getLocale } from '../runtime.js';

const translations = {"ar":"التخزين","bn":"Storage","de":"Storage","en":"Storage","es":"Storage","fr":"Storage","hi":"Storage","id":"Storage","pt-BR":"Storage","ru":"Storage","ur":"Storage","zh-CN":"Storage"};

export function admin_site_storage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
