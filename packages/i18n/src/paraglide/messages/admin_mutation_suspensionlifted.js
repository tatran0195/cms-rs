import { getLocale } from '../runtime.js';

const translations = {"ar":"رُفع الإيقاف","bn":"Suspension lifted","de":"Suspension lifted","en":"Suspension lifted","es":"Suspension lifted","fr":"Suspension lifted","hi":"Suspension lifted","id":"Suspension lifted","pt-BR":"Suspension lifted","ru":"Suspension lifted","ur":"Suspension lifted","zh-CN":"Suspension lifted"};

export function admin_mutation_suspensionlifted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
