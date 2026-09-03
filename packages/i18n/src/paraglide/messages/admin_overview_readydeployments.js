import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات نشر جاهزة","bn":"Ready Deployments","de":"Ready Deployments","en":"Ready Deployments","es":"Ready Deployments","fr":"Ready Deployments","hi":"Ready Deployments","id":"Ready Deployments","pt-BR":"Ready Deployments","ru":"Ready Deployments","ur":"Ready Deployments","zh-CN":"Ready Deployments"};

export function admin_overview_readydeployments(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
