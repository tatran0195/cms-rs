import { getLocale } from '../runtime.js';

const translations = {"ar":"مساحة العمل","bn":"Workspace","de":"Workspace","en":"Workspace","es":"Workspace","fr":"Workspace","hi":"Workspace","id":"Workspace","pt-BR":"Workspace","ru":"Workspace","ur":"Workspace","zh-CN":"Workspace"};

export function admin_common_workspace(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
