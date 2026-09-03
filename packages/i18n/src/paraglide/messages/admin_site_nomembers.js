import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يوجد أعضاء","bn":"No Members","de":"No Members","en":"No Members","es":"No Members","fr":"No Members","hi":"No Members","id":"No Members","pt-BR":"No Members","ru":"No Members","ur":"No Members","zh-CN":"No Members"};

export function admin_site_nomembers(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
