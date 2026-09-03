import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يوجد أعضاء مرتبطون بمساحة العمل حاليًا.","bn":"No Members Body","de":"No Members Body","en":"No Members Body","es":"No Members Body","fr":"No Members Body","hi":"No Members Body","id":"No Members Body","pt-BR":"No Members Body","ru":"No Members Body","ur":"No Members Body","zh-CN":"No Members Body"};

export function admin_site_nomembersbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
