import { getLocale } from '../runtime.js';

const translations = {"ar":"رفع الإيقاف","bn":"Unsuspend","de":"Unsuspend","en":"Unsuspend","es":"Unsuspend","fr":"Unsuspend","hi":"Unsuspend","id":"Unsuspend","pt-BR":"Unsuspend","ru":"Unsuspend","ur":"Unsuspend","zh-CN":"Unsuspend"};

export function admin_users_unsuspend(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
