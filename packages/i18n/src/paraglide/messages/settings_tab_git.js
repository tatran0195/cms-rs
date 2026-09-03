import { getLocale } from '../runtime.js';

const translations = {"ar":"Git","bn":"গিট","de":"Git","en":"Git","es":"git","fr":"Git","hi":"गिट","id":"Git","pt-BR":"Git","ru":"Гит","ur":"گٹ","zh-CN":"git"};

export function settings_tab_git(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
