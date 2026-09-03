import { getLocale } from '../runtime.js';

const translations = {"ar":"new@company.com","bn":"new@company.com","de":"new@company.com","en":"new@company.com","es":"new@company.com","fr":"new@company.com","hi":"new@company.com","id":"new@company.com","pt-BR":"new@company.com","ru":"new@company.com","ur":"new@company.com","zh-CN":"new@company.com"};

export function settings_account_email_placeholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
