import { getLocale } from '../runtime.js';

const translations = {"ar":"ابدأ هنا","bn":"Start here","de":"Start here","en":"Start here","es":"Start here","fr":"Start here","hi":"Start here","id":"Start here","pt-BR":"Start here","ru":"Start here","ur":"Start here","zh-CN":"Start here"};

export function settings_theme_preview_start(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
