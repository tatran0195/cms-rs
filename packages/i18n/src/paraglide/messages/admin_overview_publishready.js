import { getLocale } from '../runtime.js';

const translations = {"ar":"جاهزون للنشر","bn":"Publish ready","de":"Publish ready","en":"Publish ready","es":"Publish ready","fr":"Publish ready","hi":"Publish ready","id":"Publish ready","pt-BR":"Publish ready","ru":"Publish ready","ur":"Publish ready","zh-CN":"Publish ready"};

export function admin_overview_publishready(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
