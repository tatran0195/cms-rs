import { getLocale } from '../runtime.js';

const translations = {"ar":"بيانات الإدارة غير متاحة","bn":"Admin data unavailable","de":"Admin data unavailable","en":"Admin data unavailable","es":"Admin data unavailable","fr":"Admin data unavailable","hi":"Admin data unavailable","id":"Admin data unavailable","pt-BR":"Admin data unavailable","ru":"Admin data unavailable","ur":"Admin data unavailable","zh-CN":"Admin data unavailable"};

export function admin_auth_dataunavailable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
