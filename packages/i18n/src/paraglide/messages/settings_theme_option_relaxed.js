import { getLocale } from '../runtime.js';

const translations = {"ar":"واسع","bn":"Relaxed","de":"Relaxed","en":"Relaxed","es":"Relaxed","fr":"Relaxed","hi":"Relaxed","id":"Relaxed","pt-BR":"Relaxed","ru":"Relaxed","ur":"Relaxed","zh-CN":"Relaxed"};

export function settings_theme_option_relaxed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
