import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر إيقاف الموقع","bn":"Could not take the site down","de":"Could not take the site down","en":"Could not take the site down","es":"Could not take the site down","fr":"Could not take the site down","hi":"Could not take the site down","id":"Could not take the site down","pt-BR":"Could not take the site down","ru":"Could not take the site down","ur":"Could not take the site down","zh-CN":"Could not take the site down"};

export function admin_mutation_sitetakedownerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
