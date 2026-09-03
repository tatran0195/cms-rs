import { getLocale } from '../runtime.js';

const translations = {"ar":"النشر يحتاج إلى مراجعة","bn":"Deployment Needs attention","de":"Deployment Needs attention","en":"Deployment Needs attention","es":"Deployment Needs attention","fr":"Deployment Needs attention","hi":"Deployment Needs attention","id":"Deployment Needs attention","pt-BR":"Deployment Needs attention","ru":"Deployment Needs attention","ur":"Deployment Needs attention","zh-CN":"Deployment Needs attention"};

export function admin_operations_deploymentattention(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
