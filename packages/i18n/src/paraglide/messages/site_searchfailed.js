import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر البحث. حاول مرة أخرى.","bn":"Search failed. Try again.","de":"Search failed. Try again.","en":"Search failed. Try again.","es":"Search failed. Try again.","fr":"Search failed. Try again.","hi":"Search failed. Try again.","id":"Search failed. Try again.","pt-BR":"Search failed. Try again.","ru":"Search failed. Try again.","ur":"Search failed. Try again.","zh-CN":"Search failed. Try again."};

export function site_searchfailed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
