import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض {shown} من {total} مواقع","bn":"Showing {shown} of {total} sites","de":"Showing {shown} of {total} sites","en":"Showing {shown} of {total} sites","es":"Showing {shown} of {total} sites","fr":"Showing {shown} of {total} sites","hi":"Showing {shown} of {total} sites","id":"Showing {shown} of {total} sites","pt-BR":"Showing {shown} of {total} sites","ru":"Showing {shown} of {total} sites","ur":"Showing {shown} of {total} sites","zh-CN":"Showing {shown} of {total} sites"};

export function admin_sites_showing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
