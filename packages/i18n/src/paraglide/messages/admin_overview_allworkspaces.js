import { getLocale } from '../runtime.js';

const translations = {"ar":"عبر جميع مساحات العمل","bn":"Across all workspaces","de":"Across all workspaces","en":"Across all workspaces","es":"Across all workspaces","fr":"Across all workspaces","hi":"Across all workspaces","id":"Across all workspaces","pt-BR":"Across all workspaces","ru":"Across all workspaces","ur":"Across all workspaces","zh-CN":"Across all workspaces"};

export function admin_overview_allworkspaces(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
