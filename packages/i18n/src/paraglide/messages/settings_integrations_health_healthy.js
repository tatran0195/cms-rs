import { getLocale } from '../runtime.js';

const translations = {"ar":"سليم","bn":"সুস্থ","de":"Betriebsbereit","en":"Healthy","es":"Operativa","fr":"Opérationnel","hi":"स्वस्थ","id":"Beroperasi","pt-BR":"Operacional","ru":"Работает","ur":"صحت مند","zh-CN":"正常"};

export function settings_integrations_health_healthy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
