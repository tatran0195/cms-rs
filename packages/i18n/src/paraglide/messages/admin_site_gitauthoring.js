import { getLocale } from '../runtime.js';

const translations = {"ar":"التحرير عبر Git","bn":"Git Authoring","de":"Git Authoring","en":"Git Authoring","es":"Git Authoring","fr":"Git Authoring","hi":"Git Authoring","id":"Git Authoring","pt-BR":"Git Authoring","ru":"Git Authoring","ur":"Git Authoring","zh-CN":"Git Authoring"};

export function admin_site_gitauthoring(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
