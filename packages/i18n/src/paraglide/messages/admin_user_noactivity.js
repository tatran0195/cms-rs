import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يوجد نشاط","bn":"No Activity","de":"No Activity","en":"No Activity","es":"No Activity","fr":"No Activity","hi":"No Activity","id":"No Activity","pt-BR":"No Activity","ru":"No Activity","ur":"No Activity","zh-CN":"No Activity"};

export function admin_user_noactivity(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
