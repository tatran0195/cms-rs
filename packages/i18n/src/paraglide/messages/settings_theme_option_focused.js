import { getLocale } from '../runtime.js';

const translations = {"ar":"مركّز","bn":"Focused","de":"Focused","en":"Focused","es":"Focused","fr":"Focused","hi":"Focused","id":"Focused","pt-BR":"Focused","ru":"Focused","ur":"Focused","zh-CN":"Focused"};

export function settings_theme_option_focused(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
