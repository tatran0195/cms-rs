import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ الإنشاء…","bn":"Creating","de":"Creating","en":"Creating","es":"Creating","fr":"Creating","hi":"Creating","id":"Creating","pt-BR":"Creating","ru":"Creating","ur":"Creating","zh-CN":"Creating"};

export function admin_sites_creating(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
