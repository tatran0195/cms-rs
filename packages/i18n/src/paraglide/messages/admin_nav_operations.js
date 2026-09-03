import { getLocale } from '../runtime.js';

const translations = {"ar":"العمليات","bn":"Operations","de":"Operations","en":"Operations","es":"Operations","fr":"Operations","hi":"Operations","id":"Operations","pt-BR":"Operations","ru":"Operations","ur":"Operations","zh-CN":"Operations"};

export function admin_nav_operations(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
