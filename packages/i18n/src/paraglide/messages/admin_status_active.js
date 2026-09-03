import { getLocale } from '../runtime.js';

const translations = {"ar":"نشط","bn":"Active","de":"Active","en":"Active","es":"Active","fr":"Active","hi":"Active","id":"Active","pt-BR":"Active","ru":"Active","ur":"Active","zh-CN":"Active"};

export function admin_status_active(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
