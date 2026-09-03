import { getLocale } from '../runtime.js';

const translations = {"ar":"نيبليف","bn":"Nibleaf","de":"Nibleaf","en":"Nibleaf","es":"Nibleaf","fr":"Nibleaf","hi":"Nibleaf","id":"Nibleaf","pt-BR":"Nibleaf","ru":"Nibleaf","ur":"Nibleaf","zh-CN":"Nibleaf"};

export function email_brand_name(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
