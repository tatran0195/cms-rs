import { getLocale } from '../runtime.js';

const translations = {"ar":"المشرف","bn":"Admin","de":"Admin","en":"Admin","es":"Admin","fr":"Admin","hi":"Admin","id":"Admin","pt-BR":"Admin","ru":"Admin","ur":"Admin","zh-CN":"Admin"};

export function admin_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
