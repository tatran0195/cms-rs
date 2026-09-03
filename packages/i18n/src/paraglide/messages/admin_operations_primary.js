import { getLocale } from '../runtime.js';

const translations = {"ar":"أساسي","bn":"Primary","de":"Primary","en":"Primary","es":"Primary","fr":"Primary","hi":"Primary","id":"Primary","pt-BR":"Primary","ru":"Primary","ur":"Primary","zh-CN":"Primary"};

export function admin_operations_primary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
