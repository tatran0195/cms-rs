import { getLocale } from '../runtime.js';

const translations = {"ar":"SMTP","bn":"SMTP","de":"SMTP","en":"SMTP","es":"SMTP","fr":"SMTP","hi":"SMTP","id":"SMTP","pt-BR":"SMTP","ru":"SMTP","ur":"SMTP","zh-CN":"SMTP"};

export function settings_integrations_provider_smtp(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
