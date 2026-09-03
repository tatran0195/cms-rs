import { getLocale } from '../runtime.js';

const translations = {"ar":"حُدّث الدور","bn":"Role updated","de":"Role updated","en":"Role updated","es":"Role updated","fr":"Role updated","hi":"Role updated","id":"Role updated","pt-BR":"Role updated","ru":"Role updated","ur":"Role updated","zh-CN":"Role updated"};

export function admin_mutation_roleupdated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
