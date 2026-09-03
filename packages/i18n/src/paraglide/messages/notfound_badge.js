import { getLocale } from '../runtime.js';

const translations = {"ar":"404","bn":"404","de":"404","en":"404","es":"404","fr":"404","hi":"404","id":"404","pt-BR":"404","ru":"404","ur":"404","zh-CN":"404"};

export function notfound_badge(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
