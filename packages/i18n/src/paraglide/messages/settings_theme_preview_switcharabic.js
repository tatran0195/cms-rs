import { getLocale } from '../runtime.js';

const translations = {"ar":"العربية · RTL","bn":"Arabic · RTL","de":"Arabic · RTL","en":"Arabic · RTL","es":"Arabic · RTL","fr":"Arabic · RTL","hi":"Arabic · RTL","id":"Arabic · RTL","pt-BR":"Arabic · RTL","ru":"Arabic · RTL","ur":"Arabic · RTL","zh-CN":"Arabic · RTL"};

export function settings_theme_preview_switcharabic(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
