import { getLocale } from '../runtime.js';

const translations = {"ar":"مساحات العمل","bn":"Workspaces","de":"Workspaces","en":"Workspaces","es":"Workspaces","fr":"Workspaces","hi":"Workspaces","id":"Workspaces","pt-BR":"Workspaces","ru":"Workspaces","ur":"Workspaces","zh-CN":"Workspaces"};

export function admin_common_workspaces(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
