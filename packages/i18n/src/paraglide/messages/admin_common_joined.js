import { getLocale } from '../runtime.js';

const translations = {"ar":"تاريخ الانضمام","bn":"Joined","de":"Joined","en":"Joined","es":"Joined","fr":"Joined","hi":"Joined","id":"Joined","pt-BR":"Joined","ru":"Joined","ur":"Joined","zh-CN":"Joined"};

export function admin_common_joined(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
