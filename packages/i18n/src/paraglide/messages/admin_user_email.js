import { getLocale } from '../runtime.js';

const translations = {"ar":"البريد الإلكتروني","bn":"Email","de":"Email","en":"Email","es":"Email","fr":"Email","hi":"Email","id":"Email","pt-BR":"Email","ru":"Email","ur":"Email","zh-CN":"Email"};

export function admin_user_email(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
