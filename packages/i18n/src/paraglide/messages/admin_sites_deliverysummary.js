import { getLocale } from '../runtime.js';

const translations = {"ar":"{deployments} عمليات نشر · {access}","bn":"{deployments} deployments · {access}","de":"{deployments} deployments · {access}","en":"{deployments} deployments · {access}","es":"{deployments} deployments · {access}","fr":"{deployments} deployments · {access}","hi":"{deployments} deployments · {access}","id":"{deployments} deployments · {access}","pt-BR":"{deployments} deployments · {access}","ru":"{deployments} deployments · {access}","ur":"{deployments} deployments · {access}","zh-CN":"{deployments} deployments · {access}"};

export function admin_sites_deliverysummary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
