import { getLocale } from '../runtime.js';

const translations = {"ar":"بيانات الخطة","bn":"Plan Metadata","de":"Plan Metadata","en":"Plan Metadata","es":"Plan Metadata","fr":"Plan Metadata","hi":"Plan Metadata","id":"Plan Metadata","pt-BR":"Plan Metadata","ru":"Plan Metadata","ur":"Plan Metadata","zh-CN":"Plan Metadata"};

export function admin_site_planmetadata(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
