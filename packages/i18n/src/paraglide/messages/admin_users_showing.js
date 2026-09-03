import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض {shown} من {total} عملاء","bn":"Showing {shown} of {total} customers","de":"Showing {shown} of {total} customers","en":"Showing {shown} of {total} customers","es":"Showing {shown} of {total} customers","fr":"Showing {shown} of {total} customers","hi":"Showing {shown} of {total} customers","id":"Showing {shown} of {total} customers","pt-BR":"Showing {shown} of {total} customers","ru":"Showing {shown} of {total} customers","ur":"Showing {shown} of {total} customers","zh-CN":"Showing {shown} of {total} customers"};

export function admin_users_showing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
