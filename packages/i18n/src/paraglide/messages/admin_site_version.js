import { getLocale } from '../runtime.js';

const translations = {"ar":"الإصدار","bn":"Version","de":"Version","en":"Version","es":"Version","fr":"Version","hi":"Version","id":"Version","pt-BR":"Version","ru":"Version","ur":"Version","zh-CN":"Version"};

export function admin_site_version(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
