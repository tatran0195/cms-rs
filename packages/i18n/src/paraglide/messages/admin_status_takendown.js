import { getLocale } from '../runtime.js';

const translations = {"ar":"موقوف ","bn":"Taken down","de":"Taken down","en":"Taken down","es":"Taken down","fr":"Taken down","hi":"Taken down","id":"Taken down","pt-BR":"Taken down","ru":"Taken down","ur":"Taken down","zh-CN":"Taken down"};

export function admin_status_takendown(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
