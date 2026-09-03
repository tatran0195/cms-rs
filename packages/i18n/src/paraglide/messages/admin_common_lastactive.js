import { getLocale } from '../runtime.js';

const translations = {"ar":"آخر نشاط","bn":"Last Active","de":"Last Active","en":"Last Active","es":"Last Active","fr":"Last Active","hi":"Last Active","id":"Last Active","pt-BR":"Last Active","ru":"Last Active","ur":"Last Active","zh-CN":"Last Active"};

export function admin_common_lastactive(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
