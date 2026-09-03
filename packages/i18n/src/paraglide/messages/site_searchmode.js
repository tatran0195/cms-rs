import { getLocale } from '../runtime.js';

const translations = {"ar":"وضع البحث","bn":"Search mode","de":"Search mode","en":"Search mode","es":"Search mode","fr":"Search mode","hi":"Search mode","id":"Search mode","pt-BR":"Search mode","ru":"Search mode","ur":"Search mode","zh-CN":"Search mode"};

export function site_searchmode(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
