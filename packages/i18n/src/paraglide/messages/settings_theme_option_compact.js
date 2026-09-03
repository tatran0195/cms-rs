import { getLocale } from '../runtime.js';

const translations = {"ar":"مضغوط","bn":"Compact","de":"Compact","en":"Compact","es":"Compact","fr":"Compact","hi":"Compact","id":"Compact","pt-BR":"Compact","ru":"Compact","ur":"Compact","zh-CN":"Compact"};

export function settings_theme_option_compact(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
