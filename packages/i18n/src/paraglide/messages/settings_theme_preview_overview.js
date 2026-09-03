import { getLocale } from '../runtime.js';

const translations = {"ar":"نظرة عامة","bn":"Overview","de":"Overview","en":"Overview","es":"Overview","fr":"Overview","hi":"Overview","id":"Overview","pt-BR":"Overview","ru":"Overview","ur":"Overview","zh-CN":"Overview"};

export function settings_theme_preview_overview(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
