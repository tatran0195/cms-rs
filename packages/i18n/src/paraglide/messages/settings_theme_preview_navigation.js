import { getLocale } from '../runtime.js';

const translations = {"ar":"تنقّل المعاينة","bn":"Preview navigation","de":"Preview navigation","en":"Preview navigation","es":"Preview navigation","fr":"Preview navigation","hi":"Preview navigation","id":"Preview navigation","pt-BR":"Preview navigation","ru":"Preview navigation","ur":"Preview navigation","zh-CN":"Preview navigation"};

export function settings_theme_preview_navigation(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
