import { getLocale } from '../runtime.js';

const translations = {"ar":"المحتوى","bn":"Content","de":"Content","en":"Content","es":"Content","fr":"Content","hi":"Content","id":"Content","pt-BR":"Content","ru":"Content","ur":"Content","zh-CN":"Content"};

export function admin_site_content(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
