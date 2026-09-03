import { getLocale } from '../runtime.js';

const translations = {"ar":"product-docs","bn":"Slug Placeholder","de":"Slug Placeholder","en":"Slug Placeholder","es":"Slug Placeholder","fr":"Slug Placeholder","hi":"Slug Placeholder","id":"Slug Placeholder","pt-BR":"Slug Placeholder","ru":"Slug Placeholder","ur":"Slug Placeholder","zh-CN":"Slug Placeholder"};

export function admin_sites_slugplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
