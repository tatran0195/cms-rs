import { getLocale } from '../runtime.js';

const translations = {"ar":"مثال: شركة أفق","bn":"Organization Placeholder","de":"Organization Placeholder","en":"Organization Placeholder","es":"Organization Placeholder","fr":"Organization Placeholder","hi":"Organization Placeholder","id":"Organization Placeholder","pt-BR":"Organization Placeholder","ru":"Organization Placeholder","ur":"Organization Placeholder","zh-CN":"Organization Placeholder"};

export function admin_sites_organizationplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
