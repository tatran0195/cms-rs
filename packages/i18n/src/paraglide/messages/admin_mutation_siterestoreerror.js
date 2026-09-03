import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر استعادة الموقع","bn":"Could not restore the site","de":"Could not restore the site","en":"Could not restore the site","es":"Could not restore the site","fr":"Could not restore the site","hi":"Could not restore the site","id":"Could not restore the site","pt-BR":"Could not restore the site","ru":"Could not restore the site","ur":"Could not restore the site","zh-CN":"Could not restore the site"};

export function admin_mutation_siterestoreerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
