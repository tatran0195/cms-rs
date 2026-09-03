import { getLocale } from '../runtime.js';

const translations = {"ar":"المنصة","bn":"Platform","de":"Platform","en":"Platform","es":"Platform","fr":"Platform","hi":"Platform","id":"Platform","pt-BR":"Platform","ru":"Platform","ur":"Platform","zh-CN":"Platform"};

export function admin_platform(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
