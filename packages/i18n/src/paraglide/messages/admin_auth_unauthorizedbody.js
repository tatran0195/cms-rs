import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يملك حسابك صلاحية الوصول إلى لوحة الإدارة.","bn":"Your account doesn't have admin access to this panel.","de":"Your account doesn't have admin access to this panel.","en":"Your account doesn't have admin access to this panel.","es":"Your account doesn't have admin access to this panel.","fr":"Your account doesn't have admin access to this panel.","hi":"Your account doesn't have admin access to this panel.","id":"Your account doesn't have admin access to this panel.","pt-BR":"Your account doesn't have admin access to this panel.","ru":"Your account doesn't have admin access to this panel.","ur":"Your account doesn't have admin access to this panel.","zh-CN":"Your account doesn't have admin access to this panel."};

export function admin_auth_unauthorizedbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
