import { getLocale } from '../runtime.js';

const translations = {"ar":"التبديل إلى السمة {theme}","bn":"Switch to {theme} theme","de":"Switch to {theme} theme","en":"Switch to {theme} theme","es":"Switch to {theme} theme","fr":"Switch to {theme} theme","hi":"Switch to {theme} theme","id":"Switch to {theme} theme","pt-BR":"Switch to {theme} theme","ru":"Switch to {theme} theme","ur":"Switch to {theme} theme","zh-CN":"Switch to {theme} theme"};

export function admin_theme_switch(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
