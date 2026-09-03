import { getLocale } from '../runtime.js';

const translations = {"ar":"متاح","bn":"Available","de":"Available","en":"Available","es":"Available","fr":"Available","hi":"Available","id":"Available","pt-BR":"Available","ru":"Available","ur":"Available","zh-CN":"Available"};

export function settings_usage_state_available(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
