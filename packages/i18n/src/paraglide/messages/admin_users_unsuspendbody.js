import { getLocale } from '../runtime.js';

const translations = {"ar":"يمكنه تسجيل الدخول واستخدام مساحات العمل مجددًا.","bn":"They can sign in and use their workspaces again.","de":"They can sign in and use their workspaces again.","en":"They can sign in and use their workspaces again.","es":"They can sign in and use their workspaces again.","fr":"They can sign in and use their workspaces again.","hi":"They can sign in and use their workspaces again.","id":"They can sign in and use their workspaces again.","pt-BR":"They can sign in and use their workspaces again.","ru":"They can sign in and use their workspaces again.","ur":"They can sign in and use their workspaces again.","zh-CN":"They can sign in and use their workspaces again."};

export function admin_users_unsuspendbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
