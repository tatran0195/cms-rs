import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد عمليات نشر","bn":"No Deployments","de":"No Deployments","en":"No Deployments","es":"No Deployments","fr":"No Deployments","hi":"No Deployments","id":"No Deployments","pt-BR":"No Deployments","ru":"No Deployments","ur":"No Deployments","zh-CN":"No Deployments"};

export function admin_site_nodeployments(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
