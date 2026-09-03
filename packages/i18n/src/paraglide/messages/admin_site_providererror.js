import { getLocale } from '../runtime.js';

const translations = {"ar":"خطأ لدى المزوّد","bn":"Provider Error","de":"Provider Error","en":"Provider Error","es":"Provider Error","fr":"Provider Error","hi":"Provider Error","id":"Provider Error","pt-BR":"Provider Error","ru":"Provider Error","ur":"Provider Error","zh-CN":"Provider Error"};

export function admin_site_providererror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
