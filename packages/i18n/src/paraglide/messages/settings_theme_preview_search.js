import { getLocale } from '../runtime.js';

const translations = {"ar":"ابحث في الوثائق","bn":"Search documentation","de":"Search documentation","en":"Search documentation","es":"Search documentation","fr":"Search documentation","hi":"Search documentation","id":"Search documentation","pt-BR":"Search documentation","ru":"Search documentation","ur":"Search documentation","zh-CN":"Search documentation"};

export function settings_theme_preview_search(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
