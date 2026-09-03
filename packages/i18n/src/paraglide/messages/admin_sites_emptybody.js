import { getLocale } from '../runtime.js';

const translations = {"ar":"امسح البحث أو اختر مرشحًا تشغيليًا آخر.","bn":"Clear the search or choose another operational filter.","de":"Clear the search or choose another operational filter.","en":"Clear the search or choose another operational filter.","es":"Clear the search or choose another operational filter.","fr":"Clear the search or choose another operational filter.","hi":"Clear the search or choose another operational filter.","id":"Clear the search or choose another operational filter.","pt-BR":"Clear the search or choose another operational filter.","ru":"Clear the search or choose another operational filter.","ur":"Clear the search or choose another operational filter.","zh-CN":"Clear the search or choose another operational filter."};

export function admin_sites_emptybody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
