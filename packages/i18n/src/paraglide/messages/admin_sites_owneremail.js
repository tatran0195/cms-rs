import { getLocale } from '../runtime.js';

const translations = {"ar":"المالك البريد الإلكتروني","bn":"Owner email","de":"Owner email","en":"Owner email","es":"Owner email","fr":"Owner email","hi":"Owner email","id":"Owner email","pt-BR":"Owner email","ru":"Owner email","ur":"Owner email","zh-CN":"Owner email"};

export function admin_sites_owneremail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
