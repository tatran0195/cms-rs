import { getLocale } from '../runtime.js';

const translations = {"ar":"مساحات العمل التي يستطيع العميل الوصول إليها والأدوار المرتبطة بها.","bn":"Workspaces Body","de":"Workspaces Body","en":"Workspaces Body","es":"Workspaces Body","fr":"Workspaces Body","hi":"Workspaces Body","id":"Workspaces Body","pt-BR":"Workspaces Body","ru":"Workspaces Body","ur":"Workspaces Body","zh-CN":"Workspaces Body"};

export function admin_user_workspacesbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
