import { getLocale } from '../runtime.js';

const translations = {"ar":"العمليات المتصلة","bn":"Connected Operations","de":"Connected Operations","en":"Connected Operations","es":"Connected Operations","fr":"Connected Operations","hi":"Connected Operations","id":"Connected Operations","pt-BR":"Connected Operations","ru":"Connected Operations","ur":"Connected Operations","zh-CN":"Connected Operations"};

export function admin_site_connectedoperations(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
