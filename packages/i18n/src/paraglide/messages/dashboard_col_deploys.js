import { getLocale } from '../runtime.js';

const translations = {"ar":"عمليات النشر","bn":"স্থাপন করে","de":"Wird bereitgestellt","en":"Deploys","es":"Implementaciones","fr":"Déploie","hi":"तैनात करता है","id":"Menyebarkan","pt-BR":"Implanta","ru":"Развертывает","ur":"تعینات کرتا ہے۔","zh-CN":"部署"};

export function dashboard_col_deploys(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
