import { getLocale } from '../runtime.js';

const translations = {"ar":"دليل سريع","bn":"Quick guide","de":"Quick guide","en":"Quick guide","es":"Quick guide","fr":"Quick guide","hi":"Quick guide","id":"Quick guide","pt-BR":"Quick guide","ru":"Quick guide","ur":"Quick guide","zh-CN":"Quick guide"};

export function settings_theme_preview_guide(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
