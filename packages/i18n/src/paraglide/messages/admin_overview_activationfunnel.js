import { getLocale } from '../runtime.js';

const translations = {"ar":"مسار التفعيل","bn":"Activation funnel","de":"Activation funnel","en":"Activation funnel","es":"Activation funnel","fr":"Activation funnel","hi":"Activation funnel","id":"Activation funnel","pt-BR":"Activation funnel","ru":"Activation funnel","ur":"Activation funnel","zh-CN":"Activation funnel"};

export function admin_overview_activationfunnel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
