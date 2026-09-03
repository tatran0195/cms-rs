import { getLocale } from '../runtime.js';

const translations = {"ar":"إدارة Nibleaf","bn":"Nibleaf Admin","de":"Nibleaf Admin","en":"Nibleaf Admin","es":"Nibleaf Admin","fr":"Nibleaf Admin","hi":"Nibleaf Admin","id":"Nibleaf Admin","pt-BR":"Nibleaf Admin","ru":"Nibleaf Admin","ur":"Nibleaf Admin","zh-CN":"Nibleaf Admin"};

export function admin_meta_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
