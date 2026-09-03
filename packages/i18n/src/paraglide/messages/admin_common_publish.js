import { getLocale } from '../runtime.js';

const translations = {"ar":"النشر","bn":"Publish","de":"Publish","en":"Publish","es":"Publish","fr":"Publish","hi":"Publish","id":"Publish","pt-BR":"Publish","ru":"Publish","ur":"Publish","zh-CN":"Publish"};

export function admin_common_publish(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
