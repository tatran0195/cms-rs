import { getLocale } from '../runtime.js';

const translations = {"ar":"اكتمال النشر","bn":"Publish Completed","de":"Publish Completed","en":"Publish Completed","es":"Publish Completed","fr":"Publish Completed","hi":"Publish Completed","id":"Publish Completed","pt-BR":"Publish Completed","ru":"Publish Completed","ur":"Publish Completed","zh-CN":"Publish Completed"};

export function admin_activity_publishcompleted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
