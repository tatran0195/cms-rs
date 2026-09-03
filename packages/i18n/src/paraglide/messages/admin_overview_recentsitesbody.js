import { getLocale } from '../runtime.js';

const translations = {"ar":"أحدث مواقع التوثيق المنشأة","bn":"Latest documentation sites created","de":"Latest documentation sites created","en":"Latest documentation sites created","es":"Latest documentation sites created","fr":"Latest documentation sites created","hi":"Latest documentation sites created","id":"Latest documentation sites created","pt-BR":"Latest documentation sites created","ru":"Latest documentation sites created","ur":"Latest documentation sites created","zh-CN":"Latest documentation sites created"};

export function admin_overview_recentsitesbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
