import { getLocale } from '../runtime.js';

const translations = {"ar":"المواقع ومساحات العمل","bn":"Sites & workspaces","de":"Sites & workspaces","en":"Sites & workspaces","es":"Sites & workspaces","fr":"Sites & workspaces","hi":"Sites & workspaces","id":"Sites & workspaces","pt-BR":"Sites & workspaces","ru":"Sites & workspaces","ur":"Sites & workspaces","zh-CN":"Sites & workspaces"};

export function admin_sites_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
