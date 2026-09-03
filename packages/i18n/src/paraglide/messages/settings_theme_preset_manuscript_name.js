import { getLocale } from '../runtime.js';

const translations = {"ar":"مانيوسكريبت","bn":"Manuscript","de":"Manuscript","en":"Manuscript","es":"Manuscript","fr":"Manuscript","hi":"Manuscript","id":"Manuscript","pt-BR":"Manuscript","ru":"Manuscript","ur":"Manuscript","zh-CN":"Manuscript"};

export function settings_theme_preset_manuscript_name(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
