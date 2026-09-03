import { getLocale } from '../runtime.js';

const translations = {"ar":"النشر","bn":"স্থাপনা","de":"Bereitstellung","en":"Deployment","es":"Implementación","fr":"Déploiement","hi":"तैनाती","id":"Penempatan","pt-BR":"Implantação","ru":"Развертывание","ur":"تعیناتی","zh-CN":"部署"};

export function settings_group_deployment(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
