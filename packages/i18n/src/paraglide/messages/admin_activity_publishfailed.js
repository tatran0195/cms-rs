import { getLocale } from '../runtime.js';

const translations = {"ar":"فشل النشر","bn":"Publish Failed","de":"Publish Failed","en":"Publish Failed","es":"Publish Failed","fr":"Publish Failed","hi":"Publish Failed","id":"Publish Failed","pt-BR":"Publish Failed","ru":"Publish Failed","ur":"Publish Failed","zh-CN":"Publish Failed"};

export function admin_activity_publishfailed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
