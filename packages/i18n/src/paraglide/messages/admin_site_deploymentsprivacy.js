import { getLocale } from '../runtime.js';

const translations = {"ar":"تعرض هذه القائمة حالة النشر وتوقيته فقط، من دون سجلات خام أو بيانات خاصة بالمزوّد.","bn":"Deployments Privacy","de":"Deployments Privacy","en":"Deployments Privacy","es":"Deployments Privacy","fr":"Deployments Privacy","hi":"Deployments Privacy","id":"Deployments Privacy","pt-BR":"Deployments Privacy","ru":"Deployments Privacy","ur":"Deployments Privacy","zh-CN":"Deployments Privacy"};

export function admin_site_deploymentsprivacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
