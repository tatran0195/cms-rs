import { getLocale } from '../runtime.js';

const translations = {"ar":"إيقاف {user}؟","bn":"Suspend {user}?","de":"Suspend {user}?","en":"Suspend {user}?","es":"Suspend {user}?","fr":"Suspend {user}?","hi":"Suspend {user}?","id":"Suspend {user}?","pt-BR":"Suspend {user}?","ru":"Suspend {user}?","ur":"Suspend {user}?","zh-CN":"Suspend {user}?"};

export function admin_users_suspendtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
