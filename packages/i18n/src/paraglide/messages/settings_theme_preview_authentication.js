import { getLocale } from '../runtime.js';

const translations = {"ar":"المصادقة","bn":"Authentication","de":"Authentication","en":"Authentication","es":"Authentication","fr":"Authentication","hi":"Authentication","id":"Authentication","pt-BR":"Authentication","ru":"Authentication","ur":"Authentication","zh-CN":"Authentication"};

export function settings_theme_preview_authentication(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
