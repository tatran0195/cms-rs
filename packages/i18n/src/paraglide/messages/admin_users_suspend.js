import { getLocale } from '../runtime.js';

const translations = {"ar":"إيقاف","bn":"Suspend","de":"Suspend","en":"Suspend","es":"Suspend","fr":"Suspend","hi":"Suspend","id":"Suspend","pt-BR":"Suspend","ru":"Suspend","ur":"Suspend","zh-CN":"Suspend"};

export function admin_users_suspend(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
