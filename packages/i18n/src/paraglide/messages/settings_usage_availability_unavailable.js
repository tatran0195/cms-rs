import { getLocale } from '../runtime.js';

const translations = {"ar":"قياسات الاستخدام غير متاحة","bn":"Usage measurements are unavailable","de":"Usage measurements are unavailable","en":"Usage measurements are unavailable","es":"Usage measurements are unavailable","fr":"Usage measurements are unavailable","hi":"Usage measurements are unavailable","id":"Usage measurements are unavailable","pt-BR":"Usage measurements are unavailable","ru":"Usage measurements are unavailable","ur":"Usage measurements are unavailable","zh-CN":"Usage measurements are unavailable"};

export function settings_usage_availability_unavailable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
