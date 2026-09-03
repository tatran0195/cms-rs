import { getLocale } from '../runtime.js';

const translations = {"ar":"المالك","bn":"Owner","de":"Owner","en":"Owner","es":"Owner","fr":"Owner","hi":"Owner","id":"Owner","pt-BR":"Owner","ru":"Owner","ur":"Owner","zh-CN":"Owner"};

export function admin_common_owner(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
