import { getLocale } from '../runtime.js';

const translations = {"ar":"التفاصيل","bn":"Details","de":"Details","en":"Details","es":"Details","fr":"Details","hi":"Details","id":"Details","pt-BR":"Details","ru":"Details","ur":"Details","zh-CN":"Details"};

export function admin_user_details(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
