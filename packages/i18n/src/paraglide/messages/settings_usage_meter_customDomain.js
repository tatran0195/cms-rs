import { getLocale } from '../runtime.js';

const translations = {"ar":"النطاقات المخصصة","bn":"Custom domains","de":"Custom domains","en":"Custom domains","es":"Custom domains","fr":"Custom domains","hi":"Custom domains","id":"Custom domains","pt-BR":"Custom domains","ru":"Custom domains","ur":"Custom domains","zh-CN":"Custom domains"};

export function settings_usage_meter_customDomain(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
