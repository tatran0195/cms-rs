import { getLocale } from '../runtime.js';

const translations = {"ar":"سجلوا حسابًا","bn":"Signed up","de":"Signed up","en":"Signed up","es":"Signed up","fr":"Signed up","hi":"Signed up","id":"Signed up","pt-BR":"Signed up","ru":"Signed up","ur":"Signed up","zh-CN":"Signed up"};

export function admin_overview_signedup(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
