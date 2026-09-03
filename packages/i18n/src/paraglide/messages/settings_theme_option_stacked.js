import { getLocale } from '../runtime.js';

const translations = {"ar":"متراص","bn":"Stacked","de":"Stacked","en":"Stacked","es":"Stacked","fr":"Stacked","hi":"Stacked","id":"Stacked","pt-BR":"Stacked","ru":"Stacked","ur":"Stacked","zh-CN":"Stacked"};

export function settings_theme_option_stacked(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
