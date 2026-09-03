import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر تفويض وصول الدعم.","bn":"Could not authorize support access.","de":"Could not authorize support access.","en":"Could not authorize support access.","es":"Could not authorize support access.","fr":"Could not authorize support access.","hi":"Could not authorize support access.","id":"Could not authorize support access.","pt-BR":"Could not authorize support access.","ru":"Could not authorize support access.","ur":"Could not authorize support access.","zh-CN":"Could not authorize support access."};

export function admin_mutation_supportauthorizeerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
