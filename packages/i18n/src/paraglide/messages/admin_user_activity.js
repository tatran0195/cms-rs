import { getLocale } from '../runtime.js';

const translations = {"ar":"النشاط","bn":"Activity","de":"Activity","en":"Activity","es":"Activity","fr":"Activity","hi":"Activity","id":"Activity","pt-BR":"Activity","ru":"Activity","ur":"Activity","zh-CN":"Activity"};

export function admin_user_activity(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
