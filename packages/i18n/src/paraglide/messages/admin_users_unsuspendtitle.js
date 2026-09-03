import { getLocale } from '../runtime.js';

const translations = {"ar":"رفع الإيقاف عن {user}؟","bn":"Lift the suspension for {user}?","de":"Lift the suspension for {user}?","en":"Lift the suspension for {user}?","es":"Lift the suspension for {user}?","fr":"Lift the suspension for {user}?","hi":"Lift the suspension for {user}?","id":"Lift the suspension for {user}?","pt-BR":"Lift the suspension for {user}?","ru":"Lift the suspension for {user}?","ur":"Lift the suspension for {user}?","zh-CN":"Lift the suspension for {user}?"};

export function admin_users_unsuspendtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
