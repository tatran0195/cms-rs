import { getLocale } from '../runtime.js';

const translations = {"ar":"النشر","bn":"Deployment","de":"Deployment","en":"Deployment","es":"Deployment","fr":"Deployment","hi":"Deployment","id":"Deployment","pt-BR":"Deployment","ru":"Deployment","ur":"Deployment","zh-CN":"Deployment"};

export function admin_operations_deployment(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
