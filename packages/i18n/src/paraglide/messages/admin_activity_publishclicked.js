import { getLocale } from '../runtime.js';

const translations = {"ar":"طلب النشر","bn":"Publish Clicked","de":"Publish Clicked","en":"Publish Clicked","es":"Publish Clicked","fr":"Publish Clicked","hi":"Publish Clicked","id":"Publish Clicked","pt-BR":"Publish Clicked","ru":"Publish Clicked","ur":"Publish Clicked","zh-CN":"Publish Clicked"};

export function admin_activity_publishclicked(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
