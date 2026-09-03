import { getLocale } from '../runtime.js';

const translations = {"ar":"Git","bn":"Git","de":"Git","en":"Git","es":"Git","fr":"Git","hi":"Git","id":"Git","pt-BR":"Git","ru":"Git","ur":"Git","zh-CN":"Git"};

export function admin_operations_git(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
