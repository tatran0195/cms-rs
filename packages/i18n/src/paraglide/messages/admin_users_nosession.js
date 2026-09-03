import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد جلسة","bn":"No session","de":"No session","en":"No session","es":"No session","fr":"No session","hi":"No session","id":"No session","pt-BR":"No session","ru":"No session","ur":"No session","zh-CN":"No session"};

export function admin_users_nosession(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
