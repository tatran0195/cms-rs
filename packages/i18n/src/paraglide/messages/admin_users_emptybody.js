import { getLocale } from '../runtime.js';

const translations = {"ar":"امسح البحث أو اختر مرشح حساب آخر.","bn":"Clear the search or choose another account filter.","de":"Clear the search or choose another account filter.","en":"Clear the search or choose another account filter.","es":"Clear the search or choose another account filter.","fr":"Clear the search or choose another account filter.","hi":"Clear the search or choose another account filter.","id":"Clear the search or choose another account filter.","pt-BR":"Clear the search or choose another account filter.","ru":"Clear the search or choose another account filter.","ur":"Clear the search or choose another account filter.","zh-CN":"Clear the search or choose another account filter."};

export function admin_users_emptybody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
