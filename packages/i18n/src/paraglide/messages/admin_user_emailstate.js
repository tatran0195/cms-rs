import { getLocale } from '../runtime.js';

const translations = {"ar":"حالة البريد","bn":"Email State","de":"Email State","en":"Email State","es":"Email State","fr":"Email State","hi":"Email State","id":"Email State","pt-BR":"Email State","ru":"Email State","ur":"Email State","zh-CN":"Email State"};

export function admin_user_emailstate(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
