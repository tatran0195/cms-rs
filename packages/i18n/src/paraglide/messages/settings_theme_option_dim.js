import { getLocale } from '../runtime.js';

const translations = {"ar":"خافت","bn":"Dim","de":"Dim","en":"Dim","es":"Dim","fr":"Dim","hi":"Dim","id":"Dim","pt-BR":"Dim","ru":"Dim","ur":"Dim","zh-CN":"Dim"};

export function settings_theme_option_dim(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
