import { getLocale } from '../runtime.js';

const translations = {"ar":"هذا الموقع","bn":"এই সাইট","de":"Diese Seite","en":"This site","es":"... Todo era.","fr":"Ce site","hi":"साइट","id":"Situs ini","pt-BR":"Este site","ru":"Этот сайт","ur":"یہ سائٹ","zh-CN":"这个网站"};

export function settings_integrations_ownership_project(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
