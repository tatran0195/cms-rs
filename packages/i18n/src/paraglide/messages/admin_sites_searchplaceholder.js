import { getLocale } from '../runtime.js';

const translations = {"ar":"ابحث عن موقع أو مساحة عمل أو مالك أو مسار","bn":"Search site, workspace, owner, or slug","de":"Search site, workspace, owner, or slug","en":"Search site, workspace, owner, or slug","es":"Search site, workspace, owner, or slug","fr":"Search site, workspace, owner, or slug","hi":"Search site, workspace, owner, or slug","id":"Search site, workspace, owner, or slug","pt-BR":"Search site, workspace, owner, or slug","ru":"Search site, workspace, owner, or slug","ur":"Search site, workspace, owner, or slug","zh-CN":"Search site, workspace, owner, or slug"};

export function admin_sites_searchplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
