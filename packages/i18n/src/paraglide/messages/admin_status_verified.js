import { getLocale } from '../runtime.js';

const translations = {"ar":"موثق","bn":"Verified","de":"Verified","en":"Verified","es":"Verified","fr":"Verified","hi":"Verified","id":"Verified","pt-BR":"Verified","ru":"Verified","ur":"Verified","zh-CN":"Verified"};

export function admin_status_verified(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
