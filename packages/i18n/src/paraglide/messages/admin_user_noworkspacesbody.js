import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يرتبط هذا العميل بأي مساحة عمل حاليًا.","bn":"No Workspaces Body","de":"No Workspaces Body","en":"No Workspaces Body","es":"No Workspaces Body","fr":"No Workspaces Body","hi":"No Workspaces Body","id":"No Workspaces Body","pt-BR":"No Workspaces Body","ru":"No Workspaces Body","ur":"No Workspaces Body","zh-CN":"No Workspaces Body"};

export function admin_user_noworkspacesbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
