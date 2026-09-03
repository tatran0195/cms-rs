import { getLocale } from '../runtime.js';

const translations = {"ar":"مشاهدات الصفحات العامة","bn":"Public page views","de":"Public page views","en":"Public page views","es":"Public page views","fr":"Public page views","hi":"Public page views","id":"Public page views","pt-BR":"Public page views","ru":"Public page views","ur":"Public page views","zh-CN":"Public page views"};

export function settings_usage_meter_publicPageView(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
