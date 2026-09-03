import { getLocale } from '../runtime.js';

const translations = {"ar":"اسم الموقع","bn":"Site name","de":"Site name","en":"Site name","es":"Site name","fr":"Site name","hi":"Site name","id":"Site name","pt-BR":"Site name","ru":"Site name","ur":"Site name","zh-CN":"Site name"};

export function admin_sites_sitename(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
