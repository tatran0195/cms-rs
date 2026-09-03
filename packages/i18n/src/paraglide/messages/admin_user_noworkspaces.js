import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد مساحات عمل","bn":"No Workspaces","de":"No Workspaces","en":"No Workspaces","es":"No Workspaces","fr":"No Workspaces","hi":"No Workspaces","id":"No Workspaces","pt-BR":"No Workspaces","ru":"No Workspaces","ur":"No Workspaces","zh-CN":"No Workspaces"};

export function admin_user_noworkspaces(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
