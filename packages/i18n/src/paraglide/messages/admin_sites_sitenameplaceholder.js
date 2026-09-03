import { getLocale } from '../runtime.js';

const translations = {"ar":"مثال: توثيق المنتج","bn":"Site Name Placeholder","de":"Site Name Placeholder","en":"Site Name Placeholder","es":"Site Name Placeholder","fr":"Site Name Placeholder","hi":"Site Name Placeholder","id":"Site Name Placeholder","pt-BR":"Site Name Placeholder","ru":"Site Name Placeholder","ur":"Site Name Placeholder","zh-CN":"Site Name Placeholder"};

export function admin_sites_sitenameplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
