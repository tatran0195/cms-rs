import { getLocale } from '../runtime.js';

const translations = {"ar":"غير سليم","bn":"অসুস্থ","de":"Beeinträchtigt","en":"Unhealthy","es":"Con problemas","fr":"Problème détecté","hi":"अस्वस्थ","id":"Bermasalah","pt-BR":"Com problemas","ru":"Есть проблемы","ur":"غیر صحت مند","zh-CN":"异常"};

export function settings_integrations_health_unhealthy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
