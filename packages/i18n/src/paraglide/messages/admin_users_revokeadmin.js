import { getLocale } from '../runtime.js';

const translations = {"ar":"إلغاء صلاحية المشرف","bn":"Revoke Admin","de":"Revoke Admin","en":"Revoke Admin","es":"Revoke Admin","fr":"Revoke Admin","hi":"Revoke Admin","id":"Revoke Admin","pt-BR":"Revoke Admin","ru":"Revoke Admin","ur":"Revoke Admin","zh-CN":"Revoke Admin"};

export function admin_users_revokeadmin(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
