import { getLocale } from '../runtime.js';

const translations = {"ar":"الحالة","bn":"Status","de":"Status","en":"Status","es":"Status","fr":"Status","hi":"Status","id":"Status","pt-BR":"Status","ru":"Status","ur":"Status","zh-CN":"Status"};

export function admin_common_status(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
