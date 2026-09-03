import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات النشر","bn":"Deployments","de":"Deployments","en":"Deployments","es":"Deployments","fr":"Deployments","hi":"Deployments","id":"Deployments","pt-BR":"Deployments","ru":"Deployments","ur":"Deployments","zh-CN":"Deployments"};

export function admin_overview_deployments(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
