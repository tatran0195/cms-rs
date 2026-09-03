import { getLocale } from '../runtime.js';

const translations = {"ar":"العميل ومساحة العمل","bn":"Customer and workspace","de":"Customer and workspace","en":"Customer and workspace","es":"Customer and workspace","fr":"Customer and workspace","hi":"Customer and workspace","id":"Customer and workspace","pt-BR":"Customer and workspace","ru":"Customer and workspace","ur":"Customer and workspace","zh-CN":"Customer and workspace"};

export function admin_support_target(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
