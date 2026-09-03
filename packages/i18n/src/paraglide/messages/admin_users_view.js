import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض {user}","bn":"View {user}","de":"View {user}","en":"View {user}","es":"View {user}","fr":"View {user}","hi":"View {user}","id":"View {user}","pt-BR":"View {user}","ru":"View {user}","ur":"View {user}","zh-CN":"View {user}"};

export function admin_users_view(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
