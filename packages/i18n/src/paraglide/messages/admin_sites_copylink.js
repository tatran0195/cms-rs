import { getLocale } from '../runtime.js';

const translations = {"ar":"نسخ الرابط","bn":"Copy link","de":"Copy link","en":"Copy link","es":"Copy link","fr":"Copy link","hi":"Copy link","id":"Copy link","pt-BR":"Copy link","ru":"Copy link","ur":"Copy link","zh-CN":"Copy link"};

export function admin_sites_copylink(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
