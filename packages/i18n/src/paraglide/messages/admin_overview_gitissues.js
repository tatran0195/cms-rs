import { getLocale } from '../runtime.js';

const translations = {"ar":"مشكلات Git","bn":"Git issues","de":"Git issues","en":"Git issues","es":"Git issues","fr":"Git issues","hi":"Git issues","id":"Git issues","pt-BR":"Git issues","ru":"Git issues","ur":"Git issues","zh-CN":"Git issues"};

export function admin_overview_gitissues(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
