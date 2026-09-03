import { getLocale } from '../runtime.js';

const translations = {"ar":"غير منشور","bn":"Not published","de":"Not published","en":"Not published","es":"Not published","fr":"Not published","hi":"Not published","id":"Not published","pt-BR":"Not published","ru":"Not published","ur":"Not published","zh-CN":"Not published"};

export function admin_status_unpublished(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
