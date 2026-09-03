import { getLocale } from '../runtime.js';

const translations = {"ar":"النطاق","bn":"Domain","de":"Domain","en":"Domain","es":"Domain","fr":"Domain","hi":"Domain","id":"Domain","pt-BR":"Domain","ru":"Domain","ur":"Domain","zh-CN":"Domain"};

export function admin_operations_domain(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
