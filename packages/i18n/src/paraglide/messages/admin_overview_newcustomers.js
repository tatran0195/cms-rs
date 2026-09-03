import { getLocale } from '../runtime.js';

const translations = {"ar":"عملاء جدد","bn":"New customers","de":"New customers","en":"New customers","es":"New customers","fr":"New customers","hi":"New customers","id":"New customers","pt-BR":"New customers","ru":"New customers","ur":"New customers","zh-CN":"New customers"};

export function admin_overview_newcustomers(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
