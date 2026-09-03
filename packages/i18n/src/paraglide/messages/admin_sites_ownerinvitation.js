import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط دعوة المالك","bn":"Owner invitation link","de":"Owner invitation link","en":"Owner invitation link","es":"Owner invitation link","fr":"Owner invitation link","hi":"Owner invitation link","id":"Owner invitation link","pt-BR":"Owner invitation link","ru":"Owner invitation link","ur":"Owner invitation link","zh-CN":"Owner invitation link"};

export function admin_sites_ownerinvitation(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
