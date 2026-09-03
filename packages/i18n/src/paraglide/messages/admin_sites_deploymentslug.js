import { getLocale } from '../runtime.js';

const translations = {"ar":"مسار النشر","bn":"Deployment slug","de":"Deployment slug","en":"Deployment slug","es":"Deployment slug","fr":"Deployment slug","hi":"Deployment slug","id":"Deployment slug","pt-BR":"Deployment slug","ru":"Deployment slug","ur":"Deployment slug","zh-CN":"Deployment slug"};

export function admin_sites_deploymentslug(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
