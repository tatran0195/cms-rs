import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر بدء وصول الدعم.","bn":"Could not start support access.","de":"Could not start support access.","en":"Could not start support access.","es":"Could not start support access.","fr":"Could not start support access.","hi":"Could not start support access.","id":"Could not start support access.","pt-BR":"Could not start support access.","ru":"Could not start support access.","ur":"Could not start support access.","zh-CN":"Could not start support access."};

export function admin_mutation_supportstarterror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
