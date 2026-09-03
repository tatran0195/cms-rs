import { getLocale } from '../runtime.js';

const translations = {"ar":"النشاط والعمليات","bn":"Activity Operations","de":"Activity Operations","en":"Activity Operations","es":"Activity Operations","fr":"Activity Operations","hi":"Activity Operations","id":"Activity Operations","pt-BR":"Activity Operations","ru":"Activity Operations","ur":"Activity Operations","zh-CN":"Activity Operations"};

export function admin_site_activityoperations(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
