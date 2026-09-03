import { getLocale } from '../runtime.js';

const translations = {"ar":"الغرض من موقع التوثيق","bn":"What this documentation site is for","de":"What this documentation site is for","en":"What this documentation site is for","es":"What this documentation site is for","fr":"What this documentation site is for","hi":"What this documentation site is for","id":"What this documentation site is for","pt-BR":"What this documentation site is for","ru":"What this documentation site is for","ur":"What this documentation site is for","zh-CN":"What this documentation site is for"};

export function admin_sites_descriptionplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
