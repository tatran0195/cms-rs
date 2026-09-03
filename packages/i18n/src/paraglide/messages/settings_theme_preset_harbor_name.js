import { getLocale } from '../runtime.js';

const translations = {"ar":"هاربور","bn":"Harbor","de":"Harbor","en":"Harbor","es":"Harbor","fr":"Harbor","hi":"Harbor","id":"Harbor","pt-BR":"Harbor","ru":"Harbor","ur":"Harbor","zh-CN":"Harbor"};

export function settings_theme_preset_harbor_name(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
