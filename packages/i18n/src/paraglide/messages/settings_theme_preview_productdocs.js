import { getLocale } from '../runtime.js';

const translations = {"ar":"وثائق المنتج","bn":"Product docs","de":"Product docs","en":"Product docs","es":"Product docs","fr":"Product docs","hi":"Product docs","id":"Product docs","pt-BR":"Product docs","ru":"Product docs","ur":"Product docs","zh-CN":"Product docs"};

export function settings_theme_preview_productdocs(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
