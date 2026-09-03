import { getLocale } from '../runtime.js';

const translations = {"ar":"لم يُفحص","bn":"Not checked","de":"Not checked","en":"Not checked","es":"Not checked","fr":"Not checked","hi":"Not checked","id":"Not checked","pt-BR":"Not checked","ru":"Not checked","ur":"Not checked","zh-CN":"Not checked"};

export function admin_operations_notchecked(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
