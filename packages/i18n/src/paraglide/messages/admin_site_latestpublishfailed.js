import { getLocale } from '../runtime.js';

const translations = {"ar":"فشلت آخر عملية نشر","bn":"Latest Publish Failed","de":"Latest Publish Failed","en":"Latest Publish Failed","es":"Latest Publish Failed","fr":"Latest Publish Failed","hi":"Latest Publish Failed","id":"Latest Publish Failed","pt-BR":"Latest Publish Failed","ru":"Latest Publish Failed","ur":"Latest Publish Failed","zh-CN":"Latest Publish Failed"};

export function admin_site_latestpublishfailed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
