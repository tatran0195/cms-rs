import { getLocale } from '../runtime.js';

const translations = {"ar":"owner@example.com","bn":"Owner Email Placeholder","de":"Owner Email Placeholder","en":"Owner Email Placeholder","es":"Owner Email Placeholder","fr":"Owner Email Placeholder","hi":"Owner Email Placeholder","id":"Owner Email Placeholder","pt-BR":"Owner Email Placeholder","ru":"Owner Email Placeholder","ur":"Owner Email Placeholder","zh-CN":"Owner Email Placeholder"};

export function admin_sites_owneremailplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
