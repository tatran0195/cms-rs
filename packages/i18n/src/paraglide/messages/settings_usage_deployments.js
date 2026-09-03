import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات النشر","bn":"স্থাপনা","de":"Bereitstellungen","en":"Deployments","es":"Implementaciones","fr":"Déploiements","hi":"तैनाती","id":"Penerapan","pt-BR":"Implantações","ru":"Развертывания","ur":"تعیناتیاں","zh-CN":"部署"};

export function settings_usage_deployments(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
