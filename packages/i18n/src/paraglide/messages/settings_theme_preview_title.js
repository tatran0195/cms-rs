import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ أول تكامل","bn":"Build your first integration","de":"Build your first integration","en":"Build your first integration","es":"Build your first integration","fr":"Build your first integration","hi":"Build your first integration","id":"Build your first integration","pt-BR":"Build your first integration","ru":"Build your first integration","ur":"Build your first integration","zh-CN":"Build your first integration"};

export function settings_theme_preview_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
