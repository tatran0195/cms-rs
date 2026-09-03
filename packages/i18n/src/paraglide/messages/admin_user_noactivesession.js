import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد جلسة نشطة","bn":"No Active Session","de":"No Active Session","en":"No Active Session","es":"No Active Session","fr":"No Active Session","hi":"No Active Session","id":"No Active Session","pt-BR":"No Active Session","ru":"No Active Session","ur":"No Active Session","zh-CN":"No Active Session"};

export function admin_user_noactivesession(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
