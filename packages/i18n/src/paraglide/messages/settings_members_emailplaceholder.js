import { getLocale } from '../runtime.js';

const translations = {"ar":"teammate@company.com","bn":"teammate@company.com","de":"teammate@company.com","en":"teammate@company.com","es":"teammate@company.com","fr":"teammate@company.com","hi":"teammate@company.com","id":"teammate@company.com","pt-BR":"teammate@company.com","ru":"teammate@company.com","ur":"teammate@company.com","zh-CN":"teammate@company.com"};

export function settings_members_emailplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
