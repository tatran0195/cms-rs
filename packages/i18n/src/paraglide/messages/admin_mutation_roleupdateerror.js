import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر تحديث الدور","bn":"Could not update the role","de":"Could not update the role","en":"Could not update the role","es":"Could not update the role","fr":"Could not update the role","hi":"Could not update the role","id":"Could not update the role","pt-BR":"Could not update the role","ru":"Could not update the role","ur":"Could not update the role","zh-CN":"Could not update the role"};

export function admin_mutation_roleupdateerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
