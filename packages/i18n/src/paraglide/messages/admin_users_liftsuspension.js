import { getLocale } from '../runtime.js';

const translations = {"ar":"رفع الإيقاف","bn":"Lift suspension","de":"Lift suspension","en":"Lift suspension","es":"Lift suspension","fr":"Lift suspension","hi":"Lift suspension","id":"Lift suspension","pt-BR":"Lift suspension","ru":"Lift suspension","ur":"Lift suspension","zh-CN":"Lift suspension"};

export function admin_users_liftsuspension(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
