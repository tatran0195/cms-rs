import { getLocale } from '../runtime.js';

const translations = {"ar":"النشاط الحديث","bn":"Recent Activity","de":"Recent Activity","en":"Recent Activity","es":"Recent Activity","fr":"Recent Activity","hi":"Recent Activity","id":"Recent Activity","pt-BR":"Recent Activity","ru":"Recent Activity","ur":"Recent Activity","zh-CN":"Recent Activity"};

export function admin_user_recentactivity(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
